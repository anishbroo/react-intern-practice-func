import React, { useReducer } from "react";

type action = {
  type: "toggle";
};

type state = {
  state: string;
};

const initialValue = {
  state: "Dislike",
};

const likeReducer = (state: state, action: action): state => {
  switch (action.type) {
    case "toggle":
      return { state: state.state === "Dislike" ? "Like" : "Dislike" };
  }
};

const LikeToggle: React.FC = () => {
  const [state, dispatch] = useReducer(likeReducer, initialValue);

  const buttonToggle = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div>
      <h2>Toggle the like dislike using useReducer</h2>
      <h4>{state.state}</h4>
      <button onClick={buttonToggle}>Toggle</button>
    </div>
  );
};

export default LikeToggle;
