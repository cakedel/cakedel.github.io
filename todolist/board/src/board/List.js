import React from "react";
import { Link } from "react-router-dom";
import "../board/board.scss";
import "../board/index.css";

const List = ({ list }) => {
  return (
    <div className="BoardList">
      <table className="BoardTable">
        <thead>
          <tr>
            <td className="number">NO</td>
            <td className="title">TITLE</td>
            <td className="name">NAME</td>
            <td className="date">DATE</td>
          </tr>
        </thead>
        <tbody>
          {list
            .map((el, idx) => {
              return (
                <tr key={idx}>
                  <td className="number">{idx + 1}</td>
                  <td className="title">
                    <Link to={"/View/" + el.id}>{el.title}</Link>
                  </td>
                  <td className="name">{el.name}</td>
                  <td className="date">{el.date}</td>
                </tr>
              );
            })
            .reverse()}
        </tbody>
      </table>
      <div className="BtnGroup">
        <Link to="/Write">
          <button>글쓰기</button>
        </Link>
      </div>
    </div>
  );
};

export default List;
