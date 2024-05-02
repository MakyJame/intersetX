// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onComplete(todo.id)}>Complete</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
