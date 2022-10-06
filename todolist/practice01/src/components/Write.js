import React from "react";

const Write = ({ list, setList, input, setInput, num }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: num.current });
  };
  const registerTodo = () => {
    setList([...list, input]);
    num.current++;
    setInput({ ...input, title: "", content: "" });
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
      <button onClick={registerTodo}>submit</button>
    </div>
  );
};

export default Write;
