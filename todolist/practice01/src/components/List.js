import React from "react";
import { Link } from "react-router-dom";

const List = ({ list }) => {
  return (
    <div>
      <ul>
        {list
          .map((el) => {
            return (
              <li key={el.id}>
                <div>{el.id}</div>
                <div>
                  <Link to={"/view/" + el.id}>{el.title}</Link>
                </div>
                <div>{el.content}</div>
              </li>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
};

export default List;
