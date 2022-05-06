import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {user ? (
        <>
          <div className="logout">
            {/* <div className="username">
              <h1>{user.username}</h1>
            </div> */}
            <Button
              className="ml-3"
              type="ghost"
              size="medium"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
          <div className="todo">
            <TodoInput />
            <TodoList />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Todo;
