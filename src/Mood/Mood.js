import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";

import styles from "./Mood.module.scss";

const makeHappy = () => store.dispatch({ type: "HAPPY" });
const makeSad = () => store.dispatch({ type: "SAD" });

class Mood extends Component {
  constructor(props) {
    super(props);

    this.toggleMood = this.toggleMood.bind(this);
  }
  moodDisplay() {
    if (this.props.happy) {
      return <p>Happy!</p>;
    } else {
      return <p>Sad!</p>;
    }
  }
  toggleMood() {
    if (this.props.happy) {
      this.props.makeSad();
    } else {
      this.props.makeHappy();
    }
  }
  render() {
    return (
      <div className={styles.mood} onClick={this.toggleMood}>
        {this.moodDisplay()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  happy: state
});
const mapDispatchToProps = { makeHappy, makeSad };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mood);
