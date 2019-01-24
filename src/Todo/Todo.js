import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

import styles from "./Todo.module.scss";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      description: props.description,
      done: props.done,
      critical: props.critical
    };

    this.markAsDone = this.markAsDone.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.markCritical = this.markCritical.bind(this);
  }
  markAsDone() {
    this.setState({ done: true });
  }
  markCritical() {
    this.setState({ critical: true });
  }
  cssClasses() {
    let classes = [];
    if (this.state.critical) {
      classes = [styles.critical];
    } else {
      classes = [styles.todo];
    }
    if (this.state.done) {
      classes = [...classes, styles.done];
    }
    return classes.join(" ");
  }
  removeTodo() {
    this.props.removeTodo(this.state.id);
  }
  render() {
    return (
      <div className={this.cssClasses()}>
        {this.state.description}
        <br />
        <hr className={styles.hr} />
        <ButtonGroup>
          <Button
            className="MarkDone"
            onClick={this.markAsDone}
            color="success"
          >
            Mark as Done
          </Button>
          <Button
            className="RemoveTodo"
            onClick={this.removeTodo}
            color="warning"
          >
            Remove Me
          </Button>
          <Button
            className="MarkCritical"
            onClick={this.markCritical}
            color="danger"
          >
            Mark as Critical
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Todo;
