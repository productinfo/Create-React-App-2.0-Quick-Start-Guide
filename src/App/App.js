import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Provider } from "react-redux";
import "./App.css";

import TodoList from "../TodoList/TodoList";

import store from "../store";
import Mood from "../Mood/Mood";

const headerTitle = "Todoifier";

const App = () => (
  <Provider store={store}>
    <div className="App">
      {header(headerTitle)}
      <br />
      <Mood />
      <br />
      <TodoList />
    </div>
  </Provider>
);

const header = title => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{title}</NavbarBrand>
  </Navbar>
);

export default App;
