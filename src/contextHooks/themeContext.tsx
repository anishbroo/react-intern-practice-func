import React, { createContext, useContext, useState } from "react";

interface OnboardingContextValue {
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
}

const ThemeProvider = ({ children }: any) => {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <MyValue.Provider value={{ username, setUsername }}>
      {children}
    </MyValue.Provider>
  );
};

const MyValue = React.createContext<OnboardingContextValue | undefined>(
  undefined
);

//custom hook
const useCountry = () => {
  const onboardingContext = useContext(MyValue);
  if (onboardingContext === undefined) {
    throw new Error("useOnboardingContext must be inside a OnboardingProvider");
  }

  return onboardingContext;
};

export { ThemeProvider, useCountry };

// const ThemeContext = createContext<{
//   theme: string;
//   setTheme: React.Dispatch<React.SetStateAction<string>>;
// }>({
//   theme: "light",
//   setTheme: () => {},
// });

// export default ThemeContext;
