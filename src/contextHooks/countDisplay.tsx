import React, { useContext, useState } from "react";
import CountContext from "./countContext";

const CountDisplay: React.FC = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default CountDisplay;
