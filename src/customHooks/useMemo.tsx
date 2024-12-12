import { useState, useMemo } from "react";

const useInputLength = () => {
  const [input, setInput] = useState("");

  const inputLength = useMemo(() => {
    console.log("Calculating input length.....");
    return input.length;
  }, [input]);
  return { input, setInput, inputLength };
};

const UseMemoUsingCustomHooks: React.FC = () => {
  const { input, setInput, inputLength } = useInputLength();

  return (
    <div>
      <h2>UseMemo using custom hooks</h2>
      <label>
        Type Something:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <p>Input length: {inputLength}</p>
    </div>
  );
};

export default UseMemoUsingCustomHooks;
