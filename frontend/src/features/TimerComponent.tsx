import React, { useEffect, useState } from "react";
const TimerComponent = () => {
  const [timer, setTimer] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      mounted && setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [mounted]);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  console.log(timer);
  const handleUnmount = () => {
    setMounted(false);
  };

  return (
    <div>
      {timer}
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
};
export default TimerComponent;
