import React from "react";
import { connect } from "react-redux";
import Methods from "./Methods";
import { decrement, increment, reset } from "./Action";
import Maxvalue from "./Maxvalue";
function App(props) {
  return (
    <>
      <center>
        <h1>Counter App</h1>
        <p className="count">{props.count}</p>
      </center>
      <Methods />
      <Maxvalue />
      <center>
        <button onClick={() => props.dispatch(increment())}>Increment</button>
        <button onClick={() => props.dispatch(decrement())}>Decrement</button>
        <button onClick={() => props.dispatch(reset())}>Reset</button>
      </center>
      <center></center>
    </>
  );
}
function getCountProp(state) {
  return {
    count: state.value,
  };
}
export default connect(getCountProp)(App);
