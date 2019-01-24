import { createStore } from "redux";

function toggleState(state = true, action) {
  switch (action.type) {
    case "HAPPY":
      return true;
    case "SAD":
      return false;
    default:
      return state;
  }
}

export default createStore(toggleState);