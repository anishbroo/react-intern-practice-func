import React, { useContext } from "react";
// import ThemeContext from "./themeContext";

const ToggleButton: React.FC = () => {
  // const { theme, setTheme } = useContext(ThemeContext);

  const toggleButton = () => {
    // setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={toggleButton}>
        {/* Toggle to {theme === "light" ? "Dark" : "Light"} Mode */}
      </button>
    </div>
  );
};
export default ToggleButton;
