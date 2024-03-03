import { createStore, bindActionCreators, combineReducers } from "redux";

function todoReducer(state = [], action) {
  if (action.type == "add_todo") {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isfinished: false,
        id: state.length == 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type == "delete_todo") {
    const todoId = action.payload.todoId;
    return state.filter((t) => t.id != todoId);
  } else if (action.type == "edit_todo") {
    const todo = action.payload.todoText;
    return state.map((t) => {
      if (t.id == todo.id) {
        t.text = todoText;
      }
      return t;
    });
  } else {
    return state;
  }
}

function userReducers(state = [], action) {
  if (action.type == "add_user") {
    const userName = action.payload.userName;
    return [
      ...state,
      {
        name: userName,
        id: state.length == 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  }
  return state;
}

const addTodo = (todoText) => ({ type: "add_todo", payload: { todoText } });
const deleteTodo = (id) => ({ type: "delete_todo", payload: { todoId: id } });
const addUser = (name) => ({ type: "add_user", payload: { userName: name } });

const reducer = combineReducers({ todo: todoReducer, users: userReducers });
const { dispatch, getState, replaceReducer, subscribe } = createStore(
  reducer,
  []
);
subscribe(() => console.log(getState()));

const actions = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch);

actions.addTodo("todo 1");

actions.addTodo("todo 2");

actions.deleteTodo(2);

actions.addTodo("todo 3");

actions.addUser("Vipul");
