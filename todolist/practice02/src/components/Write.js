import React from "react";

const Write = ({ input, setInput, list, setList, num }) => {
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value, id: num.current });
  };
  const submitTodo = () => {
    setList([...list, input]);
    num.current++;
    setInput({ ...input, title: "" });
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={inputHandler}
        value={input.title || ""}
      />
      <button onClick={submitTodo}>SUBMIT</button>
    </div>
  );
};

export default Write;
