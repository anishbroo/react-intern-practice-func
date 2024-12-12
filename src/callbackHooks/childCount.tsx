import React from "react";

interface Props {
  increment: () => void; // Defining the type of increment as a function
}

const ChildCount: React.FC<Props> = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Increment from Child</button>
    </div>
  );
};

export default ChildCount;
