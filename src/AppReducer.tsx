import React from "react";
import "./App.css";
import UseReducerEg from "./reducerHooks/useReducerEg";
import LikeToggle from "./reducerHooks/likeToggle";
import BgColorToggle from "./reducerHooks/bgColorToggle";

const App: React.FC = () => {
  return (
    <>
      <UseReducerEg />
      <LikeToggle />
      <BgColorToggle />
    </>
  );
};

export default App;
