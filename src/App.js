import React from "react";
import "./App.css";

import Todo from "./Todo";
import TodoList from "./TodoList";

const App = () => (
  <div className="App">
    <h2>Todoifier</h2>
    <br />
    <TodoList />
  </div>
);

export default App;
