import React, { useContext, useState } from "react";
import { addTodo } from "../../actions/todo.actions";
function Addtodo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="add your next todo..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Addtodo;
