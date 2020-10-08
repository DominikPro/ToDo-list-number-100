import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./to-do-list";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setToDos] = useState([
    // { id: 1, name: "Todo 1", complete: false },
  ]);

  const LOCAL_STORAGE_KEY = "todoApp.todos";
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setToDos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddToDo = (e) => {
    const name = todoNameRef.current.value;
    if (name === " ") return;
    setToDos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];

    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setToDos(newTodos);
  };
  const handleClearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    console.log(newTodos);
    setToDos(newTodos);
  };

  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
