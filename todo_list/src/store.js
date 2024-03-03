import { createStore, combineReducers } from "redux";
import todoReducers from "./reducers/todoReducers";

const reducres = combineReducers({ todo: todoReducers });

const store = createStore(reducres);

export default store;
