import { useEffect, useState } from "react";

export const Pomodoro = () => {
  const [time, setTime] = useState(25 * 60);
  const [minute, setMinute] = useState<number | string>(25);
  const [second, setSecond] = useState<number | string>(0);

  const handleButton = (props: string) => {
    const interval = setTimeout(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  };

  //   const handleButton = (props: string) => {
  //     if (props === "start") {
  //       const interval = setInterval(() => {
  //         setTime((prevTime) => prevTime - 1);
  //       }, 1000);
  //     }

  //     if (props === "pause") {
  //       clearInterval(interval);
  //     }

  //     return () => clearInterval(interval);
  //   };

  useEffect(() => {
    console.log(time);
    // setMinute(
    //   Math.floor(time / 60) < 10
    //     ? `0${Math.floor(time / 60)}`
    //     : Math.floor(time / 60)
    // );
    // setSecond(time % 60 < 10 ? `0${time % 60}` : time % 60);
  }, [time]);

  return (
    <div className="pomodoro-containner">
      <div className="time-section">
        <p className="time">
          {Math.floor(time / 60)} : {time % 60}
        </p>
        <button className="start-button" onClick={handleButton("start")}>
          Start
        </button>
        <button className="pause-button" onClick={handleButton("pause")}>
          Pause
        </button>
      </div>
    </div>
  );
};
