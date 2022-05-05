import React, { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/Todo/actions";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title,
      })
    );
    setTitle("");
  };

  return (
    <>
      <div className="todo-input">
        <Input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="col-8"
        />
        <Button
          className="ml-3"
          type="primary"
          onClick={handleAddTodo}
          size="medium"
        >
          Add
        </Button>
      </div>
    </>
  );
};

export default TodoInput;
