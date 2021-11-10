import React, { useState} from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';

import './main_home.css';
import '../css/css_noamlfont.css';


const MainHome = (props) => {
  
  const { Search } = Input;

  return (
    <div className="MainHome">
      <div className="main_bannerBox">
        <div className="imageBox"><img src='img/main_banner.png'></img></div>         
        <div className="banner_contentBox">
          <h4>좋아하는 농작물을 자신의 밭에</h4>
          <p>다양한 작물을 키워보세요. 언제든 해지하실 수 있습니다.
          <br></br>농부가 될 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 전화번호를 입력하세요.</p>           
          <div className="searchBox">
            <Search placeholder="전화번호를 입력하세요" enterButton="시작하기" size="large" />
          </div>
        </div>
      </div>

      <div className="mainBox">
        
        <div className="leftContent">
          <div className="textLine">
            <h2>Keyword</h2>
            <h3>소비자 중심의 자율적인 먹거리와 서비스를 제공합니다.</h3>
            <p>단순히 서비스를 제공하는 것이 아니라<br></br>
              우리 가족이 먹는다는 생각으로 키우고 관리합니다.</p>
          </div>
          <div className="content_item">
            <div className="imageBox"><img src='img/temp_main_content_img1.png'></img></div>
            <div className="textBox"> 
              <h3>직접 키우고 받는 작물</h3>
              <div className="underLine"></div>             
              <p>자신이 원하는 작물을 받을 수 있습니다.<br></br>정성을 들여 키운 작물을  직접 재배 및 배송을 받을 수도 있습니다.</p>
            </div>            
          </div>
          <div className="keywordLine">
            <p>"Delivering happiness</p>
            <p>Sharing health"</p>
          </div>

        </div>

        <div className="rightContent">
          <div className="content_item">
            <div className="imageBox"><img src='img/temp_main_content_img2.png'></img></div>
            <div className="textBox"> 
              <h3>주말농장</h3>
              <div className="underLine"></div>             
              <p>언제나 원할때는 주말농장으로<br></br>사용하실 수 있습니다.</p>
            </div>            
          </div>

          <div className="content_item">
            <div className="imageBox"><img src='img/temp_main_content_img3.png'></img></div>
            <div className="textBox"> 
              <h3>유기농</h3>
              <div className="underLine"></div>             
              <p>자연친화적인 작물을 가족들과 혹은 혼자서<br></br>즐겨보세요. 언제나 최선을 다해 서비스를<br></br>제공합니다.</p>
            </div>            
          </div>

        </div>
           
      </div>

      <div className="questionBox">'
        <h4>자주하는 질문들</h4>
        <ul>
          <li>언제나 원할때는 주말농장으로 사용하실 수 있습니까?</li>
          <li>자신이 원하는 작물을 받을 수 있습니까?</li>
          <li>가족들과 할 수 있나요?</li>
        </ul>
      </div>
    </div>
  );
};

export default MainHome;