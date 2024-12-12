import React from "react";
import "./App.css";
import UseStateUsingCustomHooks from "./customHooks/useState";
import UseMemoUsingCustomHooks from "./customHooks/useMemo";
import UseRefUsingCustomHooks from "./customHooks/useRef";
import UseReducerUsingCustomHooks from "./customHooks/useReducer";
import UseCallbackUsingCustomHooks from "./customHooks/useCallback";
import UseEffectUsingCustomHooks from "./customHooks/useEffect";

const App: React.FC = () => {
  return (
    <>
      <UseStateUsingCustomHooks />
      <UseMemoUsingCustomHooks />
      <UseRefUsingCustomHooks />
      <UseReducerUsingCustomHooks />
      <UseCallbackUsingCustomHooks />
      <UseEffectUsingCustomHooks />
    </>
  );
};

export default App;
