import React, { useState } from 'react';
import TodoItem from './Item';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoApp() {
  const [todos, setTodos] = useState([]);  // Initial state: empty todo list
  const [newTodo, setNewTodo] = useState("");  // Initial state: empty input field
  
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);  // Adds new todo
      setNewTodo("");  // Clears input field
    }
  };

  const handleComplete = (index) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEdit = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemove = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };


  return (

<div class="container-fluid min-vh-100">

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Guides:wght@400..700&display=swap" rel="stylesheet"/>

      <div class="row h-100 ">

        <div class="sidebar col-md-4 col-lg-3 d-flex flex-column justify-content-center align-items-center position-fixed h-100">
          <div class="img-con mb-4 d-flex flex-column justify-content-center align-items-center">
            <img src={'thumb.png'} alt="Profile" class="rounded-circle img-fluid" />
          </div>

          <div className="profile container text-center ">
            <div className='row justify-content-center'>
              <div className='col-12 d-flex justify-content-center align-items-center'>
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Enter a new todo"
                  className="form-control mb-2 me-2 w-75"
                />
                <button onClick={addTodo} className="btn mb-2">Add</button>
              </div>
            </div>

           {/* <div className='jumbotron jumbotron-fluid'>TO-DO LIST</div>
          <div>
            {todos.length === 0 ? (
              <p>It's windy around here!</p>
            ) : (
              <ul>
                {todos.map((todo, index) => (
                  <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                  />
                ))}
              </ul>
            )}
          </div>
*/}
          </div>
        </div>

        <div class="main col-md-8 col-lg-9 offset-md-4 offset-lg-3 d-flex flex-column align-items-center">
          <div className='todo'>TO-DO LIST</div>
          <div className='main-item'>
            {todos.length === 0 ? (
              <p>It's windy around here!</p>
            ) : (
              <ul>
                {todos.map((todo, index) => (
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
    </div>
  );
}

export default TodoApp;
