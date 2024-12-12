import React, { useEffect, useRef } from "react";

const EffectWithRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h2>Focusing using useEffect in useRef</h2>
      <input type="text" ref={inputRef} placeholder="Look at me" />
    </div>
  );
};

export default EffectWithRef;
