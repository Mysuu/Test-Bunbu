import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/Todo/actions";

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const dispatch = useDispatch();

  return (
    <>
      <div className="todo-item">
        <div className="todo-id">#{todo.id}</div>
        <div className="todo-name">
          {edit ? (
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              value={title}
              autoFocus
            />
          ) : (
            <h4>{todo.title}</h4>
          )}
        </div>
        <div className="button-item">
          <Button
            onClick={() => {
              if (edit) {
                setTitle(todo.title);
                dispatch(updateTodo({ ...todo, title: title }));
              }
              setEdit(!edit);
            }}
            type="primary"
          >
            {edit ? "Update" : "Edit"}
          </Button>
        </div>
        <div className="button-item-2">
          <Button
            type="primary"
            onClick={() => dispatch(deleteTodo({ id: todo.id }))}
            danger
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
