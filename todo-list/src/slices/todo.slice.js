import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers:{
    addTodo:(state,action)={
        state.todo.push()
    }
  }
});
