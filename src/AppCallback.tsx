import React from "react";
import "./App.css";
import ParentCount from "./callbackHooks/parentCount";
import ToggleParent from "./callbackHooks/toggleParent";
import NumberList from "./memoHooks/numberList";
import UseMemoEg from "./memoHooks/useMemoEg";
import Sum from "./memoHooks/sum";

const App: React.FC = () => {
  return (
    <>
      <ParentCount />
      <ToggleParent />

      <NumberList />
      <UseMemoEg />
      <Sum />
    </>
  );
};

export default App;
