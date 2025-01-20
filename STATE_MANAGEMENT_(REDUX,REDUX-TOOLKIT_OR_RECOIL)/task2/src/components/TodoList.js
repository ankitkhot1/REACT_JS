// src/components/TodoList.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/todoState';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
