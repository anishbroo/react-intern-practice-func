import React, { useEffect } from "react";

const EmptyArray: React.FC = () => {
  useEffect(() => {
    console.log("Component mounted from empty dependencies");

    //clean up function when comp unmounts
    return () => {
      console.log("Component unmounted from empty dependencies");
    };
  }, []);

  return (
    <div>
      <h1>Empty Array</h1>
      <h6>Open console to see the changes</h6>
    </div>
  );
};

export default EmptyArray;
