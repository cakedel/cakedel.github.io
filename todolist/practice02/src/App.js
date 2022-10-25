import React, { useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Modify from "./components/Modify";
import View from "./components/View";
import Write from "./components/Write";

function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const num = useRef(1);

  return (
    <div className="App">
      <h2>Today's List</h2>
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/board">
          <li>BOARD</li>
        </Link>
        <Link to="/view">
          <li>VIEW</li>
        </Link>
        <Link to="/write">
          <li>WRITE</li>
        </Link>
      </ul>
      <Routes>
        <Route path="/" />
        <Route path="/board" element={<List list={list} />} />
        <Route
          path="/view/:id"
          element={<View list={list} setList={setList} />}
        />
        <Route
          path="/modify/:id"
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
        <Route
          path="/write"
          element={
            <Write
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
