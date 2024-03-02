import { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Addtodo from "./components/AddTodo/Addtodo";
import TodoContext from "./TodoContext/TodoContext";
import TodoDispatchContext from "./TodoContext/TodoDispatchContext";
import todoReducers from "./reducers/todoReducers";

function App() {
  const [List, dispatch] = useReducer(todoReducers, []);

  return (
    <TodoContext.Provider value={{ List }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <Addtodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
