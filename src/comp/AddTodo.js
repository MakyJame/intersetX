// AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;
