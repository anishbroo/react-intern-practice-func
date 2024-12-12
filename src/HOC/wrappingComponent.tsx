import React, { useState, useEffect } from "react";
import DataComponent from "./dataComponent";
import withLoading from "./withLoading";

//Wrapping data components with HOC
const DataComponentWithLoading = withLoading(DataComponent);

const Wrapping: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>
        <DataComponentWithLoading isLoading={isLoading} />
      </h2>
    </div>
  );
};

export default Wrapping;
