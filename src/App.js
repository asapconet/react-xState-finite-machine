import "./App.css";
import { useEffect } from "react";
import { useMachine } from "@xstate/react";
import { switchThemes } from "./states/darkLightSwitch";
import { trafficMachine } from "./states/trafficControlState";

function App() {
  const [state, send] = useMachine(switchThemes);
  const [current, push] = useMachine(trafficMachine);

  const handleSwitch = () => {
    send("SWITCH");
  };

  useEffect(() => {
    let trigger = () => {
      push("NEXT");
    };
    let timer = setInterval(() => {
      trigger();
    }, [3000]);
    return () => clearInterval(timer);
  });

  return (
    <div
      className={
        state.matches("light") ? "light-theme body" : "dark-theme body"
      }
    >
      <div className="container">
        <button onClick={handleSwitch}>
          {state.matches("light") ? "light" : "dark"}
        </button>
        <h1>{state.matches("light") ? "Light Turnels" : "Dark Moments"}</h1>
      </div>
      <div>
        <ul className="light-container">
          <li className={current.matches("stop") && "red"}>
            {current.matches("stop") && "STOP"}
          </li>
          <li className={current.matches("ready") && "yellow"}>
            {current.matches("ready") && "READY"}
          </li>
          <li className={current.matches("go") && "green"}>
            {current.matches("go") && "GO"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
