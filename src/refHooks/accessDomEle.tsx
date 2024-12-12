import React, { useRef } from "react";

const AccessDomEle: React.FC = () => {
  //creating a ref for input elememts
  const inputRef = useRef<HTMLInputElement>(null); //initialize a ref to input element

  //function to focus the input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2>Focusing on the box using useRef.current.focus()</h2>
      <input type="text" ref={inputRef} placeholder="Click to focus" />
      <button onClick={focusInput}>Click</button>
    </div>
  );
};

export default AccessDomEle;
