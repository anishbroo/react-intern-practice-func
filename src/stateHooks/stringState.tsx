import React, { useState } from "react";

const StringState: React.FC = () => {
  const [name, setName] = useState<string>("Ranjana");

  const updateName = () => {
    setName("Rahul");
  };

  return (
    <div>
      <h1>String State</h1>
      <h3>Name: {name}</h3>
      <button onClick={updateName}>Change</button>
    </div>
  );
};

export default StringState;
