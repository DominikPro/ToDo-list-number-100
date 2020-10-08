import React from "react";
import Todo from "./to-do";

const ToDoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
};
export default ToDoList;
