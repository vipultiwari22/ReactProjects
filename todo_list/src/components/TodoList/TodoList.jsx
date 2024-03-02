import React, { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../TodoContext/TodoContext";

function TodoList() {
  const { List, setList } = useContext(TodoContext);
  return (
    <div>
      {List.length > 0 &&
        List.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            Tododata={todo.todoData}
            changeFinished={(isFinished) => {
              const updatedList = List.map((t) => {
                if (t.id == todo.id) {
                  todo.finished = isFinished;
                }
                return t;
              });
              setList(updatedList);
            }}
            onDelete={() => {
              const updatedList = List.filter((t) => t.id != todo.id);
              setList(updatedList);
            }}
            onEdit={(todoText) => {
              const updatedList = List.map((t) => {
                if (t.id == todo.id) {
                  todo.todoData = todoText;
                }
                return t;
              });
              setList(updatedList);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
