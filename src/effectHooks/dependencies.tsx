import React, { useState, useEffect } from "react";

const Dependencies: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed ${count} times.`);
  }, [count]);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Dependencies Example</h1>
      <h3>Count: {count}</h3>
      <button onClick={inc}>Inc</button>
      <h6>Open console to see the changes</h6>
    </div>
  );
};

export default Dependencies;
