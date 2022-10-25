import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Modify = ({ list, setList, input, setInput, num }) => {
  const LINK = useNavigate();
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  // el.id는 객체이기에 : useParams에서 id로 받아줌 string으로 바꿔준다!!
  const [modify, setModify] = useState({
    id: view.id,
    title: view.title,
  });

  const inputHandler = (e) => {
    setModify({ ...input, [e.target.name]: e.target.value, id: num.current });
  };
  const modifyTodo = () => {
    const newList = list.map((it) =>
      id === String(it.id)
        ? {
            ...modify,
            title: modify.title,
          }
        : it
    );
    setList(newList);
    LINK("/board");
  };
  
  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={inputHandler}
        value={modify.title || ""}
      />
      <button onClick={modifyTodo}>MODIFY</button>
    </div>
  );
};

export default Modify;
