import React, { useState, useEffect } from 'react';

function Timer({onTimerEnd,triggertimer,setResettimer}) {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(true);

  const resetTimer =()=>{
    setIsActive(false);
    onTimerEnd();
    setSeconds(10);
    setIsActive(true);
  }
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(()=>{

    if(seconds<0)
    {
       resetTimer();
    }
  },[seconds])

  useEffect(()=>{
console.log("timer reset");
    if(triggertimer){

        setIsActive(false);
        setSeconds(10);
        setIsActive(true);
        setResettimer(false);
    }
   
  },[triggertimer])

  return (
    <div>
      <p>Time Elapsed: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
