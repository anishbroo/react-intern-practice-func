import React, { useRef } from "react";

function useFocus() {
  const ref = useRef<HTMLInputElement | null>(null);

  const focus = () => {
    ref.current?.focus();
  };

  return { ref, focus };
}

const UseRefUsingCustomHooks: React.FC = () => {
  const { ref, focus } = useFocus();

  return (
    <div>
      <h2>UseRef using custom hooks</h2>

      <input type="text" placeholder="Focus me" ref={ref} />
      <button onClick={focus}>CLICK</button>
    </div>
  );
};

export default UseRefUsingCustomHooks;
