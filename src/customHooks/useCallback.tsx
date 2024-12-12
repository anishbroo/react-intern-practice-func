import { useState, useCallback } from "react";

function useInput(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  return { value, handleInputChange };
}

const UseCallbackUsingCustomHooks: React.FC = () => {
  const { value, handleInputChange } = useInput("");

  return (
    <div>
      <h2>UseCallback using custom hooks</h2>
      <label>
        Input:
        <input type="text" value={value} onChange={handleInputChange} />
      </label>
      <p>Current value: {value}</p>
    </div>
  );
};

export default UseCallbackUsingCustomHooks;
