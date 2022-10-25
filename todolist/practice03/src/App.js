import React, { useRef, useState } from "react";

function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);
  const submitTodo = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value, id: num.current });
  };
  const listTodo = () => {
    setList([...list, input]);
    num.current++;
    setInput({
      ...input,
      title: "",
      content: "",
    });
  };
  const delTodo = (el) => {
    setList(list.filter((it) => it.id !== el.id));
  };
  return (
    <div>
      <h2>Todo List</h2>
      {list.map((el) => {
        return (
          <ul key={el.id}>
            <li>{el.id}</li>
            <li>{el.title}</li>
            <li>{el.content}</li>
            <button onClick={() => delTodo(el)}>삭제하기</button>
          </ul>
        );
      })}

      <input
        type="text"
        name="title"
        value={input.title || ""}
        onChange={submitTodo}
      />
      <input
        type="text"
        name="content"
        value={input.content || ""}
        onChange={submitTodo}
      />
      <button onClick={listTodo}>글쓰기</button>
    </div>
  );
}

export default App;
