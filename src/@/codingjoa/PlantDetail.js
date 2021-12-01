import React from 'react'
import * as ReactRouter from 'react-router-dom'
import { postPlant, getPlant, updatePlant, deletePlant } from './ajax'
import { useAsyncView, useInputRef, useInputRefHandlar } from './hook'

function EditorNew() {
  const history = ReactRouter.useHistory();
  const name = useInputRef('');
  const description = useInputRef('');
  const categoryId = useInputRef('0');
  const image = React.useRef(null);
  const handleSubmit = useInputRefHandlar(formData => {
    postPlant(formData).then(() => history.go(0), err => alert(`작성 실패. [${err?.response?.status}/${err?.response?.data?.message}]`));
  }, {
    name,
    image,
    description,
    categoryId,
  });
  return (
    <>
      <input ref={name} />
      <input ref={description} />
      <input ref={categoryId} type="number" />
      <input type="file" ref={image} />
      <button onClick={handleSubmit}>등록</button>
    </>
  );
}

function EditorUpdate({
  id,
  nameStr,
  descriptionStr,
  categoryIdStr,
}) {
  const history = ReactRouter.useHistory();
  const name = useInputRef(nameStr);
  const description = useInputRef(descriptionStr);
  const categoryId = useInputRef(`${categoryIdStr}`);
  const image = React.useRef(null);
  const handleSubmit = useInputRefHandlar(formData => {
    updatePlant(id, formData).then(() => history.go(0), err => alert(`작성 실패. [${err?.response?.status}/${err?.response?.data?.message}]`));
  }, {
    name,
    image,
    description,
    categoryId,
  });
  const handleDelete = () => {
    deletePlant({
      id,
    }).then(() => history.go(0), err => alert(`삭제 실패. [${err?.response?.status}/${err?.response?.data?.message}]`));
  };
  return (
    <>
      <input ref={name} />
      <input ref={description} />
      <input ref={categoryId} type="number" />
      <input type="file" ref={image} />
      <button onClick={handleSubmit}>등록</button>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}

export default function PlantDetail() {
  const [ View, state ] = useAsyncView((payload, callback) => {
    getPlant(payload).then(data => callback({
      code: 1,
      data,
    }), err => alert(`조회 실패. [${err?.response?.status}/${err?.response?.data?.message}]`));
  }, {
    id: 6,
  });
  return (
    <View>
      {state.data && <EditorUpdate id={6} nameStr={state.data.name} descriptionStr={state.data.description} categoryIdStr={state.data.categoryId} />}
    </View>
  );
  return
}
