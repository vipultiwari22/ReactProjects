import React, { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import { addTodo } from "../../actions/todo.actions";

function TodoList({ editeTodo, deleteTodo, todoFinished }) {
  const List = useSelector((state) => state.todo);

  function onFinished(todo, isFinished) {
    todoFinished(todo, isFinished);
  }

  function onDelete(todo) {
    deleteTodo(todo);
  }

  function onEdit(todo, todoText) {
    editeTodo(todo, todoText);
  }

  return (
    <div>
      {List.length > 0 &&
        List.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            Tododata={todo.todoData}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;
