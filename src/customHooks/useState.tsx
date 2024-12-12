import React, { useState } from "react";

function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, inc, dec, reset };
}

const UseStateUsingCustomHooks: React.FC = () => {
  const { count, inc, dec, reset } = useCounter(111);

  return (
    <div>
      <h2>Use state using custom hooks</h2>
      <h4>Count: {count}</h4>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseStateUsingCustomHooks;
