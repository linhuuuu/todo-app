import React, { useState } from 'react';

function TodoItem({ todo, index, onComplete, onEdit, onRemove }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        onEdit(index, editText);
        setIsEditing(false);
    };

    return (
        <li  style={{ color: todo.completed ?'grey' : 'black', textDecoration: todo.completed ? 'line-through solid red 5px' : 'none' }}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="form-control input courier highlight"
                        placeholder='Add Task name.'
                    />
                    <button className="btn" hidden={editText.trim()===""} onClick={handleSave}>Save</button> 
                    <button className="btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div className='item'>
                    <p className="courier highlight">{todo.text}</p>
                    <button className="btn" onClick={() => onComplete(index)} hidden={todo.completed}>Complete</button>
                    <button className="btn" onClick={() => setIsEditing(true)} hidden={todo.completed}>Edit</button>
                    <button className="btn" onClick={() => onRemove(index)} hidden={todo.completed}>Remove</button>
                </div>
            )}
        </li>
    );
}

export default TodoItem;