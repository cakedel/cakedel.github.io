import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Modify = ({ num, setList, list }) => {
  const LINK = useNavigate();
  const { id } = useParams();
  const view = list.find((it) => String(it.id) === id);
  const [input, setInput] = useState({
    id: view.id,
    title: view.title,
    content: view.content,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: id });
  };
  const ModifyTodo = () => {
    const modify = list.map((it) =>
      String(it.id) === id
        ? {
            ...input,
            id: input.id,
            title: input.title,
            content: input.content,
          }
        : it
    );
    setList(modify);
    LINK("/Board");
  };

  return (
    <div>
      <input
        type="text"
        value={input.title || ""}
        name="title"
        onChange={handleInput}
      />
      <input
        type="text"
        value={input.content || ""}
        name="content"
        onChange={handleInput}
      />
      <button onClick={ModifyTodo}>modify</button>
    </div>
  );
};

export default Modify;
