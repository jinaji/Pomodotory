import { Pomodoro } from "./Pomodoro";

export const Main = () => {
  return (
    <div className="Main flex bg-pink-500">
      <div className="grid grid-row-2 grid-col-3">
        <div className="w-10 h-10 bg-bule-500"></div>
        <img src={require("./public/logo192.png")} alt="Pomodoro" />
        <h1>POMODOTORY</h1>
        <Pomodoro />
      </div>
    </div>
  );
};
