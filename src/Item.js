import React, { useState } from 'react';
function TodoItem({ todo, index, onComplete, onEdit, onRemove }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        onEdit(index, editText);
        setIsEditing(false);
    };

    return (
        <li style={{ textDecoration: todo.completed ? 'line-through solid red 5px' : 'none' }}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p className="item" onClick={() => onComplete(index)}>{todo.text}</p>
                    <button className="btn" onClick={() => onComplete(index)}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button className="btn" onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="btn" onClick={() => onRemove(index)}>Remove</button>
                </div>
            )}
        </li>
    );
}

export default TodoItem;