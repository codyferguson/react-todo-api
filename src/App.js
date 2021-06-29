import './App.css';
import React, { useState, useEffect } from 'react';

// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once
  useEffect(() => {
    getLocalTodos()
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);


  //Functions
  const filterHandler = () => {
    switch(filter) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false ));
        break
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos) );
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos' === null)){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Cody's Todo List</h1>
      </header>
      <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setFilter={setFilter}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
