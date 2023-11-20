import { useEffect, useState } from "react";

export const Pomodoro = () => {
  const [time, setTime] = useState(5);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [work, setWork] = useState(true);
  const [rest, setRest] = useState(false);
  const [cycle, setCycle] = useState<string[]>([]);

  const handleButton = (props: string) => {
    if (props === "start") {
      if (timerId) return;
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setTimerId(interval);
    } else if (props === "pause") {
      if (timerId) clearInterval(timerId);
      return;
    } else if (props === "reset") {
      if (timerId) clearInterval(timerId);
      setTime(25 * 60);
      return;
    }
  };

  useEffect(() => {
    if (time <= 0 && timerId && work) {
      clearInterval(timerId);
      setWork(!work);
      setRest(!rest);
      setTime(3);
      alert("Time is up!");
      setTimerId(null);
    } else if (time <= 0 && timerId && rest) {
      clearInterval(timerId);
      setWork(!work);
      setRest(!rest);
      setTime(5);
      setCycle([...cycle, "cycle"]);
      alert("Time is up!");
      setTimerId(null);
    }
  }, [time]);

  useEffect(() => {
    if (timerId !== null) return () => clearInterval(timerId);
  }, []);

  const doneCycle = () => {
    return cycle.map((item, key) => {
      return (
        <div className="bg-blue-100" key={key}>
          참잘했어요
        </div>
      );
    });
  };
  console.log(time);

  return (
    <div className="pomodoro-containner col-span-1 w-[30%] bg-blue-100 mx-auto">
      <h1>POMODOTORY</h1>
      <div className="time-section">
        <p className="time-description">Time to {work ? "work" : "rest"}</p>
        <p className="time">
          {Math.floor(time / 60) < 10
            ? `0${Math.floor(time / 60)}`
            : Math.floor(time / 60)}{" "}
          : {time % 60 < 10 ? `0${time % 60}` : time % 60}
        </p>
        {doneCycle()}
        <button className="start-button" onClick={() => handleButton("start")}>
          Start
        </button>
        <button className="pause-button" onClick={() => handleButton("pause")}>
          Pause
        </button>
        <button className="reset-button" onClick={() => handleButton("reset")}>
          Reset
        </button>
      </div>
    </div>
  );
};
