import React, { useEffect, useState } from "react";

const DataComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Data loaded successfully");
    }, 2000);
  }, []);

  return (
    <div>
      <h4>{data}</h4>
    </div>
  );
};

export default DataComponent;
