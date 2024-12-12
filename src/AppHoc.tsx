import React, { useState } from "react";
import "./App.css";
import Wrapping from "./HOC/wrappingComponent";
import WrappingToDoList from "./HOC/wrappingToDoList";
import WrapDashProfile from "./HOC/wrapDashProfile";

const App: React.FC = () => {
  return (
    <>
      <Wrapping />
      <WrappingToDoList />
      <WrapDashProfile />
    </>
  );
};

export default App;
