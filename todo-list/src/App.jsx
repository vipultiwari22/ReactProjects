import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Addtodo from "./components/AddTodo/Addtodo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  todoFinished,
} from "./actions/todo.actions";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, deleteTodo, editTodo, todoFinished },
    dispatch
  );
  return (
    <>
      <Addtodo addTodo={actions.addTodo} />
      <TodoList
        deleteTodo={actions.deleteTodo}
        editTodo={actions.editTodo}
        todoFinished={actions.todoFinished}
      />
    </>
  );
}

export default App;
