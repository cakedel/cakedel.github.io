import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = ({ setList, list }) => {
  const LINK = useNavigate();
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  // el.id는 객체이기에 : useParams에서 id로 받아줌 string으로 바꿔준다!!
  const modifyTodo = () => {
    LINK("/modify/" + view.id);
    console.log(view);
  };
  const delTodo = () => {
    setList(list.filter((it) => String(it.id) !== id));
    LINK("/board");
  };
  return (
    <div>
      <div>
        <div>{view.title}</div>
        <button onClick={modifyTodo}>MODIFY</button>
        <button onClick={() => delTodo(id)}>DELETE</button>
      </div>
    </div>
  );
};

export default View;
