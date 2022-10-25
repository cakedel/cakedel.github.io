import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Modify = ({ list, setList }) => {
  const GO = useNavigate();
  const { id } = useParams();
  const view = list.find((el) => String(el.id) === id);
  const [input, setInput] = useState({
    id: view.id,
    // 뭐든 객체나 배열을 건드리려면 id값이 중요하다. 받아오는 것 잊지말기.
    name: view.name,
    title: view.title,
    content: view.content,
  });
  const handleInput = (e) => {
    // const { name, value, date } = e.target;
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleDateString(),
      id: id,
    });
    // object.name = object[name]
    // object.name='xxx'(X)
    // object.[name] = 'xxx' (O)
  };
  const ModifyHandler = () => {
    const modify = list.map((it) =>
      String(it.id) === id
        ? {
            ...input,
            name: input.name,
            content: input.content,
            title: input.title,
          }
        : it
    );
    setList(modify);
    GO("/View/" + view.id);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={input.name || ""}
        />
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={input.title || ""}
        />
        <textarea
          name="content"
          onChange={handleInput}
          value={input.content || ""}
        />
        <button onClick={ModifyHandler}>MODIFY</button>
      </div>
    </div>
  );
};

export default Modify;
