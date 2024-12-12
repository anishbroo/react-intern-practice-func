import React, { useState, useMemo } from "react";

const NumberList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const evenNumbers = useMemo(() => {
    console.log("Filtering even numbers...");
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]); // The filtered numbers will be recomputed only when 'numbers' changes

  const bttn = () => setNumbers([...numbers, numbers.length + 1]);
  return (
    <div>
      <h2>Filtering even numbers using useMemo</h2>
      <h4>Even Numbers:</h4>
      <ul>
        {evenNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={bttn}>Add</button>
    </div>
  );
};

export default NumberList;
