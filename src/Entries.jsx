import React, { useEffect, useState, useRef } from "react";
import List from "./List";
import { FiCheck } from "react-icons/fi";
import "./styles.css";

function Entries() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [option, setOption] = useState('Malta')
  const [inputPoint, SetInputPoint] = useState("");
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState("");

  const addHandler = (e) => {
    e.preventDefault();
    if (!inputText) {
    //   alert("no Input");
    } else if (editing) {
      const updatedList = todoList.map((itemObj) => {
        if (itemObj.id === editID) return {
          ...itemObj,
          item: inputText,
          points: inputPoint,
          option: option,
        };
        else return itemObj;
      });
      setTodoList(updatedList);
      setInputText("");
      SetInputPoint('')
      setEditing(false);
    } else {
      const newListItemObj = {
        item: inputText,
        id: new Date().getTime().toString(),
        points: inputPoint, 
        option: option
      };
      setTodoList(todoList.concat(newListItemObj));
      setInputText("");
      SetInputPoint("");
    }
  };

  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const deleteHandler = (id) => {
    const editedList = todoList.filter((item) => item.id !== id);
    setTodoList(editedList);
  };

  const resetHandler = () => {
    setOption('Malta')
    setInputText('')
    SetInputPoint('')
    setEditing(false)
  };

  const editHandler = (id) => {
    setEditing(true);
    const EditObj = todoList.find((obj) => obj.id === id);
    setInputText(EditObj.item);
    setOption(EditObj.option)
    SetInputPoint(EditObj.points)
    setEditID(id);
  };
  

  return (
    <div className="main-container">
      <div className="container">
        <form onSubmit={addHandler} className="form-container">
          <p className="titles">Name</p>
          <input
            value={inputText}
            onChange={inputChangeHandler}
            placeholder="add item"
          />
          <p className="titles">Select Coctail</p>
          <select name="Coctail" id="Coctail" className="selection" onChange = {(e) => setOption(e.target.value)}>
            <option
              value="Malta"
              className="option"
            >
              Malta
            </option>
            <option
              value="Santra"
              className="option"
            >
              Santra
            </option>
            <option
              value="Sonfee"
              className="option"
            >
              Sonfee
            </option>
          </select>
          <br />
          <br />
          <p className="titles">Points</p>
          <input
            type="number"
            value={inputPoint}
            onChange={(e) => SetInputPoint(e.target.value)}
          />
          <div className="reset">
            <button type="submit">
              {editing ? (
                <FiCheck style={{ color: "white" }} size="22" />
              ) : (
                "Add"
              )}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </form>
      </div>

      <div className="container">
        <List
          todoList={todoList}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </div>
    </div>
  );
}

export default Entries;
