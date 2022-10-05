import logo from "./logo.svg";
import "./App.css";
import react, { useState, useRef } from "react";
function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);
  const registerList = () => {
    setList([...list, input]);
    console.log(list);
    setInput({ ...input, value: "" });
    num.current++;
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: num.current });
    console.log(e.target.value);
  };
  const removeTodo = (id) => {
    setList(list.filter((el) => id !== el.id));
    console.log(list);
  };
  return (
    <div className="App">
      <h2>ToDoList</h2>
      <ul>
        {list.map((el, idx) => {
          return (
            <li key={idx}>
              {el.title} <button onClick={() => removeTodo(el.id)}>Del</button>
            </li>
          );
        })}
      </ul>
      <input type="text" name="title" onChange={handleInput} />
      <button onClick={registerList}>Register</button>
    </div>
  );
}

export default App;
