import React, { useState, useCallback } from "react";
import ToggleChild from "./toggleChild";

const ToggleParent = () => {
  const [toggled, setToggled] = useState(false);

  const toggle = useCallback(() => {
    setToggled((prevState) => !prevState);
  }, []);

  return (
    <div>
      <h2>Value from parent: {toggled ? "Toggled On" : "Toggled Off"}</h2>
      <ToggleChild toggle={toggle} />
    </div>
  );
};
export default ToggleParent;
