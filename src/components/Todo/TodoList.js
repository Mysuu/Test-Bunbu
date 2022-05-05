/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.app);

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
