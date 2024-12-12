import React, { useState, useEffect } from "react";

const MultipleDependencies: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Granit");

  useEffect(() => {
    console.log("Count or name changed:", count, name);
  }, [count, name]);

  const inc = () => {
    setCount(count + 1);
  };

  const updateName1 = () => {
    setName("Martin");
  };
  const updateName2 = () => {
    setName("Thomas");
  };

  return (
    <div>
      <h1>Multiple Dependencies Example</h1>
      <h3>Name: {name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={updateName1} onDoubleClick={updateName2}>
        Update
      </button>
      <button onClick={inc}>Increment</button>
      <h6>Open console to see the changes</h6>
    </div>
  );
};

export default MultipleDependencies;
