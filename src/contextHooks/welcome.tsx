import React, { useContext } from "react";
import UserContext from "./userContext";

const Welcome: React.FC = () => {
  //using the context
  const username = useContext(UserContext);

  return (
    <div>
      <h3>Welcome {username}</h3>
    </div>
  );
};

export default Welcome;
