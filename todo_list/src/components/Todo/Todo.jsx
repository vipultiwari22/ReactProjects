import React from "react";

function Todo({ Tododata }) {
  return (
    <div>
      <input type="checkbox" name="" id="" />
      {Tododata}
      <button>edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
