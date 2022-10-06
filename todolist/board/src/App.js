import React from "react";
import { useState, useRef } from "react";
import Write from "../src/components/Write";
import List from "../src/components/List";
import View from "../src/components/View";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Modify from "../src/components/Modify";

const App = () => {
  const id = useRef(1);
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    // const { name, value, date } = e.target;
  };
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/Board">BOARD</NavLink>
            </li>
            <li>
              <NavLink to="/View">VIEW</NavLink>
            </li>
            <li>
              <NavLink to="/Write">WRITE</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" />
        <Route path="/Board" element={<List list={list} />} />
        <Route
          path="/View/:id"
          element={<View list={list} setList={setList} />}
        />
        <Route
          path="/Modify/:id"
          element={
            <Modify
              list={list}
              setInput={setInput}
              input={input}
              setList={setList}
            />
          }
        />
        <Route
          path="/Write"
          element={
            <Write
              list={list}
              setInput={setInput}
              input={input}
              setList={setList}
              id={id}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
