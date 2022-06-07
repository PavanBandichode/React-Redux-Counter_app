import { createStore } from "redux";

function counterReducer(
  state = { value: 0, step: 1, maxValue: Infinity },
  action
) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value:
          state.value + state.step <= state.maxValue
            ? state.value + state.step
            : state.value,
      };
    case "decrement":
      return { ...state, value: state.value - state.step };
    case "changeStep":
      return { ...state, step: action.payload };
    case "maxValue":
      return { ...state, maxValue: action.maxValue };
    case "reset":
      return { ...state, value: 0 };
    default:
      return state;
  }
}

let store = createStore(counterReducer);
export default store;
