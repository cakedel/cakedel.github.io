import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const View = ({ list, setList }) => {
  const GO = useNavigate();
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  const deleteTodo = () => {
    setList(list.filter((el) => view.id !== el.id));
    GO("/Board");
  };
  const modifyTodo = () => {
    GO("/Modify/" + view.id);
  };
  return (
    <div>
      <div>{view.name}</div>
      <div>{view.title}</div>
      <div>{view.content}</div>
      <div>{view.date}</div>
      <button onClick={modifyTodo}>MODIFY</button>
      <button onClick={deleteTodo}>DELETE</button>
    </div>
  );
};

export default View;
