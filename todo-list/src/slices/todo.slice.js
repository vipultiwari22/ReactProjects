import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let todoText = action.payload.todoText;
      state.todo.push({
        id: state.todo.length + 1,
        todoData: todoText,
        finished: false,
      });
    },
    editTodo: (state, action) => {
      let todo = action.payload.todo;
      let todoText = action.payload.todoText;
      state.todo = state.todo.map((t) => {
        if (t.id == todo.id) {
          todo.todoData = todoText;
        }
        return t;
      });
    },
    todoFinished: (state, action) => {
      let todo = action.payload.todo;
      let isFinished = action.payload.isFinished;
      const updatedList = state.todo.map((t) => {
        if (t.todo == todo.id) {
          todo.finished = isFinished;
        }
        return t;
      });
    },
    deleteTodo: (state, action) => {
      let todo = action.payload.todo;
      state.todo = state.todo.filter((t) => t.id != todo.id);
    },
  },
});

export const { addTodo, editTodo, todoFinished, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
