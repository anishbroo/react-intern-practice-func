import React, { HtmlHTMLAttributes, useRef } from "react";

const MultipleRefs: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const countRef = useRef(0);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const incCount = () => {
    countRef.current += 1;
    console.log("Current count: ", countRef.current);
  };

  const buttonChange = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "blue";
    }
  };

  return (
    <div>
      <h2>Multiple useRef</h2>
      <input type="text" ref={inputRef} placeholder="Focus" />
      <button onClick={focusInput}>Focus</button>
      <button ref={buttonRef} onClick={buttonChange}>
        Change
      </button>
      <h4>Counter: {countRef.current}</h4>
      <button onClick={incCount}>Increase</button>
    </div>
  );
};

export default MultipleRefs;
