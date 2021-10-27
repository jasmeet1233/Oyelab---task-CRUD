import React from "react";
import { FiStar } from "react-icons/fi";
import { FcEmptyTrash } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";


const List = ({ todoList, deleteHandler, editHandler }) => {
  return (
    <div>
      <h2 className="entries">Entries</h2>
      <div className="column">
        <p>Name</p>
        <p className="shift">Coctail</p>
        <p className="shift2">Points</p>
        <p>Actions</p>
      </div>
      <ul className="list-container">
        {todoList.map((todoObj) => {
          const { id, item, option, points } = todoObj;
          return (
            <li key={id}>
              <div className="list-item">{item}</div>
              <div>{option}</div>
              <div>{points}</div>
              <div className="list-buttons">
                <div>
                  <button onClick={() => deleteHandler(id)}>
                    <FcEmptyTrash size={19} style={{ marginRight: "7px" }} />
                  </button>
                  <button onClick={() => editHandler(id)}>
                    <AiFillEdit size={19} style={{ color: "white" }} />
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
