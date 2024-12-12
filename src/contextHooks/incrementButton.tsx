import React, { useContext, useState } from "react";
import CountContext from "./countContext";

const IncrementButton: React.FC = () => {
  const { setCount } = useContext(CountContext);

  const inc = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={inc}>Increment</button>
    </div>
  );
};

export default IncrementButton;
