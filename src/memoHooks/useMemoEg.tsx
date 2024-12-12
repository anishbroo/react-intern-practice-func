import React, { useState, useMemo } from "react";

const UseMemoEg: React.FC = () => {
  const [count, setCount] = useState(0);

  const [names, setNames] = useState("Martin");

  const memoFunc = useMemo(() => {
    return count * 2;
  }, [count]);

  const inc = () => {
    setCount(count + 1);
  };

  const change = () => {
    setNames(names === "Martin" ? "Odegaard" : "Martin");
  };
  return (
    <div>
      <h2>Expensive Computations</h2>

      <h4>Count: {count}</h4>
      <p>Multiplied result of count: {memoFunc}</p>

      <button onClick={inc}>INC</button>

      <p>Name: {names}</p>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default UseMemoEg;
