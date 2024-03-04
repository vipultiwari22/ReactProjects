import { createStore, combineReducers } from "redux";
import todoReducers from "./reducers/todoReducers";
// import todoReducer from "./slices/todo.slice";
// import { configureStore } from "@reduxjs/toolkit";

const reducres = combineReducers({ todo: todoReducers });

// const store = configureStore({
//   reducre: {
//     todo: todoReducer,
//   },
// });

const store = createStore(reducres);

export default store;
