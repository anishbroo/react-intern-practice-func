import React, { useState } from "react";
import "./App.css";
import AccessDomEle from "./refHooks/accessDomEle";
import Counter from "./refHooks/counter";
import Timer from "./refHooks/timer";
import RefWithUseEffect from "./refHooks/refWithUseEffect";
import EffectWithRef from "./refHooks/effectWithRef";
import MultipleRefs from "./refHooks/multipleRefs";

const App: React.FC = () => {
  return (
    <>
      <AccessDomEle />
      <Counter />
      <Timer />
      <RefWithUseEffect />
      <EffectWithRef />
      <MultipleRefs />
    </>
  );
};

export default App;
