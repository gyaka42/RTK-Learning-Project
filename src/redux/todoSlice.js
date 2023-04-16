import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Header componenti yapilacak",
      owner: "Ayse",
      is_done: false,
      assigned_at: "12 April 2023 09:00",
      target_hour: 2,
    },
    {
      id: 2,
      title: "RTK Kurulumu",
      owner: "Burhan",
      is_done: false,
      assigned_at: "12 April 2023 11:00",
      target_hour: 6,
    },
    {
      id: 3,
      title: "Ana sayfa componenti yapilacak",
      owner: "Fadime",
      is_done: false,
      assigned_at: "12 April 2023 13:00",
      target_hour: 4,
    },
    {
      id: 4,
      title: "Routelar olusturacak",
      owner: "Gokhan",
      is_done: true,
      assigned_at: "12 April 2023 15:00",
      target_hour: 8,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addEditTodo: (state, action) => {
      if (action.payload.id) {
        action.payload.id = parseInt(action.payload.id);
        const foundIndex = state.todos.findIndex(
          (item) => item.id === action.payload.id
        );

        state.todos[foundIndex] = action.payload;
      } else {
        const maxId =
          state.todos.length === 0 ? 0 : state.todos[state.todos.length - 1].id;

        action.payload.id = maxId + 1;

        state.todos.push(action.payload);
      }
    },
    removeTodo: (state, action) => {
      const foundIndex = state.todos.findIndex(
        (item) => item.id === action.payload
      );

      state.todos.splice(foundIndex, 1);
    },
    clearTodo: (state, action) => {
      state.todos = [];
    },
  },
});

export const { addEditTodo, removeTodo, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;
