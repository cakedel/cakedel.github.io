import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const View = ({ list, setList }) => {
  const LINK = useNavigate();
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  const deleteTodo = () => {
    setList(list.filter((it) => id !== String(it.id)));
    console.log(list);
    LINK("/Board");
  };
  const linkToModify = () => {
    LINK("/Modify/" + view.id);
  };
  return (
    <ul>
      <li>{view.id}</li>
      <li>{view.title}</li>
      <li>{view.content}</li>
      <button onClick={() => deleteTodo(id)}>del</button>
      <button onClick={linkToModify}>modify</button>
    </ul>
  );
};

export default View;
