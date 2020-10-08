import React from "react";

const Todo = ({ todo, toggleTodo }) => {
  const handelToDoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handelToDoClick}
          ></input>
          {todo.name}
        </label>
      </div>
    </>
  );
};
export default Todo;
