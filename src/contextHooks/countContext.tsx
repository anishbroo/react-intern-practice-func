import React, { createContext } from "react";

const CountContext = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  count: 0,
  setCount: () => {},
});

export default CountContext;
