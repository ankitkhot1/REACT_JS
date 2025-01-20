// src/features/todo/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
