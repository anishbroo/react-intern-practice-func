import React, { useReducer } from "react";

type action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
    };

type state = {
  count: number;
};

const initialState = {
  count: 0,
};

const reducer = (state: state, action: action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initialState;

    default:
      throw new Error("Error 404");
  }
};

const UseReducerEg: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const inc = () => {
    dispatch({ type: "increment" });
  };

  const dec = () => {
    dispatch({ type: "decrement" });
  };
  const res = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <h2>Use Reducer Example</h2>
      <h4>Count: {count.count}</h4>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={res}>Reset</button>
    </div>
  );
};

export default UseReducerEg;
