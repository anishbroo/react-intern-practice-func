import React, { useCallback } from "react";

interface childProps {
  toggle: () => void;
}

const ToggleChild: React.FC<childProps> = ({ toggle }) => {
  return (
    <div>
      <button onClick={toggle}>Toggle Child</button>
    </div>
  );
};

export default ToggleChild;
