export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (todo) => ({
  type: "DELETE_TODO",
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: "UPDATE_TODO",
  payload: todo,
});

export const addTodoSaga = (todo) => ({
  type: "ADD_TODO_SAGA",
  payload: todo,
});

export const deleteTodoSaga = (todo) => ({
  type: "DELETE_TODO_SAGA",
  payload: todo,
});

export const updateTodoSaga = (todo) => ({
  type: "UPDATE_TODO_SAGA",
  payload: todo,
});
