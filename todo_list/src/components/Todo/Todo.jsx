import React, { useState } from "react";

function Todo({ Tododata, isFinished, changeFinished, onDelete, onEdit }) {
  const [Finished, setFinished] = useState(isFinished);
  const [isEdiiting, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(Tododata);
  return (
    <div>
      <input
        type="checkbox"
        checked={Finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {isEdiiting ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{Tododata}</span>
      )}

      <button
        onClick={() => {
          setIsEditing(!isEdiiting);
          onEdit(editText);
        }}
      >
        {!isEdiiting ? "Edit" : "Save"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
