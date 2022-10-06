import React, { useRef, useState } from "react";

function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value, id: num.current });
  };
  const submitTodo = () => {
    setList([...list, input]);
    console.log(list);
    num.current++;
    setInput({ ...input, title: "" });
  };
  const delTodo = (el) => {
    setList(list.filter((it) => it.id !== el.id));
    console.log(list);
    console.log();
    console.log();
  };
  return (
    <div className="App">
      <h2>Today's List</h2>
      <ul>
        {list.map((el, idx) => {
          return (
            <li key={el.id}>
              {el.title}
              <button onClick={() => delTodo(el)}>DELETE</button>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        name="title"
        onChange={inputHandler}
        value={input.title}
      />
      <button onClick={submitTodo}>SUBMIT</button>
    </div>
  );
}

export default App;
