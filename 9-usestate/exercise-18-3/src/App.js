import React, { useState } from "react";
import "./style.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const fieldsArr = [
    ["Seconds: ", 1, seconds],
    ["Minutes: ", 60, minutes],
    ["Hours: ", 3600, hours],
  ];

  const getInput = (seconds) => {
    setSeconds(seconds);
    setMinutes(seconds / 60);
    setHours(seconds / 3600);
  };

  const getJSX = () => {
    return fieldsArr.map((field) => {
      return (
        <div>
          <label htmlFor={field[0]}>{field[0]}</label>
          <input
            id={field[0]}
            onChange={({ target }) => getInput(target.value * field[1])}
            value={field[2]}
          />
        </div>
      );
    });
  };

  return <div className="main">{getJSX()}</div>;
}

export default App;
