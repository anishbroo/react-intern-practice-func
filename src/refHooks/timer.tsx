import React, { useState, useRef } from "react";

const Timer: React.FC = () => {
  const timerRef = useRef<null | number>(null);
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    if (timerRef.current) return;

    timerRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);

      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div>
      <h2>Combining useState with useRef</h2>
      <h4>Timer: {timer}</h4>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
export default Timer;
