import "./App.css";
import { useMachine } from "@xstate/react";
import { switchThemes } from "./states/darkLightSwitch";
import { useEffect } from "react";

function App() {
  const [current, send] = useMachine(switchThemes);

  const handleSwitch = () => {
    send("SWITCH");
  };

  

  useEffect(() => {
    let timer = setInterval(() => {}, [3000]);
    return () => clearInterval(timer);
  });

  return (
    <div
      className={
        current.matches("light") ? "light-theme body" : "dark-theme body"
      }
    >
      <div className="container">
        <button onClick={handleSwitch}>
          {current.matches("light") ? "light" : "dark"}
        </button>
        <h1>{current.matches("light") ? "Light Turnels" : "Dark Moments"}</h1>
      </div>
      <div>
        <ul className="light-container">
          <li className="red">Red</li>
          <li className="yellow">Yellow</li>
          <li className="green">Green</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
