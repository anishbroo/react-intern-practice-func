import React, { useState } from "react";

const ArrayState: React.FC = () => {
  //declaring an array which holds name
  const [names, setNames] = useState<string[]>(["Martin", "Kai", "Bukayo"]);

  //function to add a new name
  const addName = () => {
    setNames([...names, "Gabriel"]);
  };

  //function to remove name
  const removeName = (nameToRemove: string) => {
    setNames(names.filter((name) => name !== nameToRemove));
  };

  return (
    <div>
      <h1>Array State Example</h1>
      <h3>Name List</h3>
      <ol>
        {names.map((name, index) => (
          <li>
            {name} <button onClick={() => removeName(name)}>Remove</button>
          </li>
        ))}
      </ol>
      <button onClick={addName}>Add Name</button>
    </div>
  );
};

export default ArrayState;
