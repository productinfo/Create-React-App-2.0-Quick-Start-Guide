import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

import TodoList from "../TodoList/TodoList";

const headerTitle = "Todoifier";

const App = () => (
  <div className="App">
    {header(headerTitle)}
    <br />
    <TodoList />
  </div>
);

const header = title => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{title}</NavbarBrand>
  </Navbar>
);

export default App;
