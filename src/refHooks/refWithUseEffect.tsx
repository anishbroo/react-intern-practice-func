import React, { useState, useEffect, useRef } from "react";

const RefWithUseEffect: React.FC = () => {
  const timerRef = useRef<number | null>(null);

  const [timer, setTimer] = useState(0);

  const duration = 10;

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
      console.log("Timer started.");
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        console.log("Timer stopped.");
      }
    };
  }, []);

  useEffect(() => {
    if (timer >= duration && timerRef.current) {
      clearInterval(timerRef.current);

      timerRef.current = null;
    }
  }, [timer]);

  return (
    <div>
      <h2>Combining useState and useEffect with useRef</h2>
      <h4>Elapsed time: {timer} seconds</h4>
      <p>Timer will stop after {duration} seconds.</p>
    </div>
  );
};

export default RefWithUseEffect;
