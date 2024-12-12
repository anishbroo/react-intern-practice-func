import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement" | "reset";
};

function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      throw new Error("Error 404");
  }
}

function useCounterReducer(initialValue: number = 0) {
  const [state, dispatch] = useReducer(counterReducer, { count: initialValue });

  const inc = () => {
    dispatch({ type: "increment" });
  };
  const dec = () => {
    dispatch({ type: "decrement" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };

  return { count: state.count, inc, dec, reset };
}

const UseReducerUsingCustomHooks: React.FC = () => {
  const { count, inc, dec, reset } = useCounterReducer(0);

  return (
    <div>
      <h2>UseReducer using custom hooks</h2>
      <h4>Count: {count}</h4>
      <button onClick={inc}>High</button>
      <button onClick={dec}>Low</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseReducerUsingCustomHooks;
