import React, { useContext } from "react";
import CountContext from "./countContext";

const DecrementButton: React.FC = () => {
  const { setCount } = useContext(CountContext);

  const dec = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default DecrementButton;
