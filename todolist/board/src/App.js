import React from "react";
import { useState, useRef, useEffect } from "react";
import Write from "./board/Write";
import List from "./board/List";
import View from "./board/View";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Modify from "./board/Modify";

const App = () => {
  const id = useRef(1);
  const [input, setInput] = useState({});
  const [list, setList] = useState(() => {
    const savedTodos = localStorage.getItem("imtodo");
    if (savedTodos) {
      return JSON.parse(savedTodos);
      // local storage에 저장한 value를 parsing하여 list 형태에 들어갈 수 있는 객체로 만들어준다.
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("imtodo", JSON.stringify(list));
    // 객체이면 local storage 의 value로 들어올수 없으므로 string으로 만들어 JSON 형태로 저장한다.
  }, [list]);

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
