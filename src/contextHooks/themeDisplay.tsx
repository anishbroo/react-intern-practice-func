import React, { createContext, useContext, useEffect } from "react";
import { useCountry } from "./themeContext";
// import ThemeContext from "./themeContext";

const ThemeDisplay: React.FC = () => {
  const { username, setUsername } = useCountry();

  // console.log({ u });

  useEffect(() => {
    // setUsername("eeee");
  }, []);

  return (
    <div>
      <h2>The current theme is {username}.</h2>
    </div>
  );
};

export default ThemeDisplay;
