import React, { useState } from "react";
import "./light.css";
import "./App.css";
import { ThemeProvider } from "./contextHooks/themeContext";
import ThemeDisplay from "./contextHooks/themeDisplay";
// import ToggleButton from "./contextHooks/toggleButton";
import CountContext from "./contextHooks/countContext";
import CountDisplay from "./contextHooks/countDisplay";
import DecrementButton from "./contextHooks/decrementButton";
import IncrementButton from "./contextHooks/incrementButton";
import UserContext from "./contextHooks/userContext";
import Welcome from "./contextHooks/welcome";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const [theme, setTheme] = useState<string>("light");
  return (
    <>
      <UserContext.Provider value="Anish Maan Maharjan">
        <Welcome />
      </UserContext.Provider>

      <CountContext.Provider value={{ count, setCount }}>
        <CountDisplay />
        <IncrementButton />
        <DecrementButton />
      </CountContext.Provider>

      {/* <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme}>
          <ThemeDisplay />
          <ToggleButton />
        </div>
      </ThemeContext.Provider> */}
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>
    </>
  );
};

export default App;
