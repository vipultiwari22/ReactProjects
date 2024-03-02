import React, { useContext, useState } from "react";
import TodoDispatchContext from "../../TodoContext/TodoDispatchContext";
function Addtodo() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);

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
          dispatch({ type: "add_todo", payload: { todoText: inputText } });
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Addtodo;
