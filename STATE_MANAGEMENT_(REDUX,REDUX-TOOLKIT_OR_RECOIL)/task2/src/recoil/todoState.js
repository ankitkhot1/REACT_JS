// src/recoil/todoState.js
import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState', 
  default: [],
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState', 
  get: ({get}) => {
    const list = get(todoListState);
    return list;
  },
});
