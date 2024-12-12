import React, { useState } from "react";
import logo from "./logo.svg";
import "./light.css";
import "./App.css";
import SimpleHookEg from "./stateHooks/simpleHookEg";
import StringState from "./stateHooks/stringState";
import ArrayState from "./stateHooks/arrayState";
import ObjectState from "./stateHooks/objectState";
import NoDependencies from "./effectHooks/noDependencies";
import EmptyArray from "./effectHooks/emptyArray";
import Dependencies from "./effectHooks/dependencies";
import MultipleDependencies from "./effectHooks/multipleDependencies";
import Fetching from "./effectHooks/fetching";

const App: React.FC = () => {
  // //State Hooks
  // return (
  //   <>
  //     <SimpleHookEg />
  //     <StringState />
  //     <ArrayState />
  //     <ObjectState />
  //   </>
  // );
  // //Effect Hooks
  // return (
  //   <>
  //     <NoDependencies />
  //     <EmptyArray />
  //     <Dependencies />
  //     <MultipleDependencies />
  //   </>
  // );
  //Fetching data
  return (
    <>
      <Fetching />
    </>
  );
};

export default App;
