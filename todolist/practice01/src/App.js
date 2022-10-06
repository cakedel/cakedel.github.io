import react, { useRef, useState } from "react";
import { Routes, Route, Link, NaviLink } from "react-router-dom";
import List from "./components/List";
import Write from "./components/Write";
import Modify from "./components/Modify";
import View from "./components/View";

function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);

  return (
    <div className="App">
      <nav>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/Board">
          <li>BOARD</li>
        </Link>
        <Link to="/View">
          <li>VIEW</li>
        </Link>
        <Link to="/Write">
          <li>WRITE</li>
        </Link>
      </nav>
      <h2>할일 만들기</h2>
      <Routes>
        <Route path="/" />
        <Route
          path="/Board"
          element={<List list={list} setList={setList} num={num} />}
        />
        <Route
          path="/View/:id"
          element={<View list={list} setList={setList} />}
        />
        <Route
          path="/Write"
          element={
            <Write
              list={list}
              setList={setList}
              input={input}
              setInput={setInput}
              num={num}
            />
          }
        />
        <Route
          path="/Modify/:id"
          element={
            <Modify
              input={input}
              setInput={setInput}
              list={list}
              setList={setList}
              num={num}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
