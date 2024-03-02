import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Addtodo from "./components/AddTodo/Addtodo";
import TodoContext from "./TodoContext/TodoContext";

function App() {
  const [List, setList] = useState([
    { id: 1, todoData: "todo 1", finished: false },
    { id: 2, todoData: "todo 2", finished: false },
  ]);

  return (
    <TodoContext.Provider value={{ List, setList }}>
      <Addtodo
        updateList={(todo) =>
          setList([
            ...List,
            { id: List.length + 1, todoData: todo, finished: false },
          ])
        }
      />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
