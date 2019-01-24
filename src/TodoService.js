import axios from "axios";

const fetchTodos = async () => {
  const res = await axios.get("/api/todos", {
    headers: { accept: "application/json" }
  });
  const json = await res.data;
  return { status: res.status, todos: json.todos };
};

const createTodo = async description => {
  const config = {
    headers: { accept: "application/json" }
  };
  const data = {
    description: description,
    critical: false,
    done: false
  };
  const res = await axios.post("/api/todos", data, config);
  const json = await res.data;
  return { status: res.status, todos: json.todos };
};

const deleteTodo = async todoId => {
  const config = {
    headers: { accept: "application/json" }
  };
  const res = await axios.delete(`/api/todos/${todoId}`, config);
  const json = await res.data;
  return { status: res.status, todos: json.todos };
};

export { fetchTodos, createTodo, deleteTodo };
