import React, {useState,useEffect} from 'react';
import axios from 'axios';

import './plantCategoryList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SimpleCarousel from './carousel_banner';
import PlantCategoryList_plantList from './plantCategoryList-plantList';



const PlantCategoryList = (props) => {
  const [plantListData, setPlantListData] = useState(null);

  const getPlantListData = async () => {         
    const data_URL = `http://txshi.iptime.org:49000/api/v1/category`;
    try {
      const { data } = await axios.get(data_URL)
      setPlantListData(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { 
    getPlantListData()
  }, [])

  return (
    <div>
  
  { plantListData !== null && <div className="PlantCategoryList">
      <SimpleCarousel plantListData={plantListData}></SimpleCarousel>
      <PlantCategoryList_plantList plantListData={plantListData} />      
    </div>
  }
    
  </div>);
};

export default PlantCategoryList;