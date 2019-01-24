import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";

import NewTodo from "./NewTodo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: ["Item #1", "Item #2", "Item #3"] };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  renderItems() {
    return this.state.items.map(description => (
      <Todo
        key={description}
        description={description}
        removeTodo={this.removeTodo}
      />
    ));
  }
  addTodo(item) {
    this.setState({ items: [...this.state.items, item] });
  }
  removeTodo(removeItem) {
    const filteredItems = this.state.items.filter(description => {
      return description !== removeItem;
    });
    this.setState({ items: filteredItems });
  }
  render() {
    return (
      <div className="TodoList">
        <NewTodo addTodo={this.addTodo} />
        {this.renderItems()}
      </div>
    );
  }
}

export default TodoList;
