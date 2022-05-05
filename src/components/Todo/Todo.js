import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";
import { Button } from "antd";

const Todo = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div className="logout">
        <Button className="ml-3" type="ghost" size="medium" onClick={logout}>
          Logout
        </Button>
      </div>
      <div className="todo">
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
};

export default Todo;
