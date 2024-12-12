import React, { useState, useRef } from "react";

const Counter: React.FC = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const inc = () => {
    countRef.current += 1;
    console.log("Count", countRef.current);
  };

  const renderCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useState and useRef Difference:</h2>
      <h4>COUNT: {countRef.current}</h4>
      <button onClick={inc}>Increment</button>
      <button onClick={renderCount}>Render Value</button>
    </div>
  );
};
export default Counter;
