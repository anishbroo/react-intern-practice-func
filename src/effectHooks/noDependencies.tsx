import React, { useEffect } from "react";

const NoDependencies: React.FC = () => {
  useEffect(() => {
    console.log("Component mounted fron no dependencies");
  }); //runs on every render

  return (
    <div>
      <h1>No Dependencies</h1>
      <h6>Open console to see the changes</h6>
    </div>
  );
};

export default NoDependencies;
