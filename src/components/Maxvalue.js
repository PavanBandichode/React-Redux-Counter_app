import { connect } from "react-redux";
import { updateMaxValue } from "./Action";

function MaxValue(props) {
  function handleClick(maxValue) {
    props.dispatch(updateMaxValue(maxValue));
  }
  return (
    <>
      <h2>Max Value</h2>
      <div>
        <button
          onClick={() => handleClick(15)}
          className={props.maxValue === 15 ? "active" : "steps"}
        >
          15
        </button>
        <button
          onClick={() => handleClick(100)}
          className={props.maxValue === 100 ? "active" : "steps"}
        >
          100
        </button>
        <button
          onClick={() => handleClick(200)}
          className={props.maxValue === 200 ? "active" : "steps"}
        >
          200
        </button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    maxValue: state.maxValue,
  };
}

export default connect(mapStateToProps)(MaxValue);
