import React, { useCallback, useState } from "react";
import ChildCount from "./childCount";

interface datatype {
  count: number;
}
const ParentCount: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); //count change huda func recreate huncha

  return (
    <div>
      <h2>Parent Count and Child Count using useCallback</h2>
      <h4>Count from parent: {count}</h4>
      <ChildCount increment={increment} />
    </div>
  );
};

export default ParentCount;
