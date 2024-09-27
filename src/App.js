import React, { useState } from 'react';
import TodoItem from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

//USE STATES
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  //ADD TODO
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); //CLEAR
    }
  };

  //COMPLETE TOGGLE
  const handleComplete = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  //EDIT
  const handleEdit = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos); //UPDATE
  };

  //REMOVE
  const handleRemove = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };


  return (

    <div class="container-fluid min-vh-100 "> {/*CONTAINER AND FONT*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Guides:wght@400..700&display=swap"
        rel="stylesheet"
      />

      <div class="row h-100">
        {/* SIDEBAR */}
        <div class="sidebar col-4 d-flex flex-column justify-content-center align-items-center position-fixed h-100">
          {/* WRAPPER*/}
          <div class="col-12 d-flex flex-column justify-content-center align-items-center w-100 h-100">
            {/* ICON */}
            <div class="image-con mb-4">
              <img src="thumb.png" alt="Profile" class="rounded-circle img-fluid" />
            </div>
            <div class="text-center mb-3">
              <label>Welcome!</label>
              <p class="courier">What shall we do for today?</p>
            </div>
            {/* Input Group */}
            <div class="input-group mb-3 w-75">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a Task"
                class="form-control border border-2"
              />
              <button onClick={addTodo} class="courier add">Add</button>
            </div>
          </div>
        </div>
      </div>

      {/*MENU AND INPUT*/}
      <div class="main col-8 offset-4 d-flex flex-column align-items-center text-wrap">
        <div class="todo fancy-font">TO-DO LIST</div>
        <div class="main-item text-wrap ">
          {todos.length === 0 ? (<p>No todos available. Add a todo to get started!</p>) :
            (<ul>
              {todos.map((todo, index) =>
              (
                <TodoItem
                  key={index}
                  todo={todo}
                  index={index}
                  onComplete={handleComplete}
                  onEdit={handleEdit}
                  onRemove={handleRemove}
                />
              ))}
            </ul>
            )}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
