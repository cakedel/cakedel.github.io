import logo from "./logo.svg";
import "./App.css";
import react, { useRef, useState } from "react";

function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: num.current });
  };
  const registerTodo = () => {
    setList([...list, input]);
    num.current++;
    setInput({ ...input, title: "" });
  };
  const deleteTodo = (idx) => {
    setList(list.filter((el) => idx !== el.id));
    console.log(list);
  };
  return (
    <div className="App">
      <h2>할일 만들기</h2>
      <ul>
        {list.map((el, idx) => {
          return (
            <li key={idx}>
              {el.title}
              <button onClick={() => deleteTodo(el.id)}>del</button>
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        value={input.title}
        name="title"
        onChange={handleInput}
      />
      <button onClick={registerTodo}>submit</button>
    </div>
  );
}

export default App;
