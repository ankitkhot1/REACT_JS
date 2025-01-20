// src/features/todo/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const handleAdd = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleUpdate = (todo) => {
    setEditingTodo(todo);
    setUpdatedText(todo.text);
  };

  const handleSave = () => {
    dispatch(updateTodo({
      id: editingTodo.id,
      text: updatedText,
      completed: editingTodo.completed,
    }));
    setEditingTodo(null);
    setUpdatedText('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          <button onClick={() => handleUpdate(todo)}>Edit</button>
        </div>
      ))}
      {editingTodo && (
        <div>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditingTodo(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
