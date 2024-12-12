import React, { useReducer } from "react";

type action =
  | {
      type: "red";
    }
  | {
      type: "blue";
    }
  | {
      type: "green";
    }
  | {
      type: "yellow";
    };

type state = {
  color: string;
};

const initialValue = {
  color: "white",
};

const colorReducer = (state: state, action: action): state => {
  switch (action.type) {
    case "red":
      return { color: "red" };
    case "blue":
      return { color: "blue" };
    case "yellow":
      return { color: "yellow" };
    case "green":
      return { color: "green" };
  }
};

const BgColorToggle: React.FC = () => {
  const [state, dispatch] = useReducer(colorReducer, initialValue);

  const redBttn = () => {
    dispatch({ type: "red" });
  };

  const blueBttn = () => {
    dispatch({ type: "blue" });
  };
  const yellowBttn = () => {
    dispatch({ type: "yellow" });
  };
  const greenBttn = () => {
    dispatch({ type: "green" });
  };

  return (
    <div
      style={{
        height: "16vh",
        backgroundColor: state.color,
        transition: "1s",
      }}
    >
      <h2>Background color change using useReducer</h2>
      <h4>{state.color}</h4>
      <button onClick={redBttn}>Red</button>
      <button onClick={blueBttn}>Blue</button>
      <button onClick={yellowBttn}>Yellow</button>
      <button onClick={greenBttn}>Green</button>
    </div>
  );
};

export default BgColorToggle;
