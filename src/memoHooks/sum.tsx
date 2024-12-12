import React, { useMemo, useState } from "react";

const Sum: React.FC = () => {
  const [num1, setNum1] = useState(0);

  const [num2, setNum2] = useState(0);

  const [text, setText] = useState("");

  const sum = useMemo(() => {
    console.log(`Calculating sum of ${num1} and ${num2}....`);
    return num1 + num2;
  }, [num1, num2]);

  return (
    <div>
      <h2>UseMemo Example</h2>
      <div>
        <label>
          Number 1:
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </label>
      </div>
      <p>
        Sum of {num1} and {num2} is {sum}
      </p>

      <div>
        <label>
          Any text:
          <input
            type="text"
            value={text}
            placeholder="Anythin over!"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <p>You typed {text}</p>
    </div>
  );
};
export default Sum;
