import React, { useState } from "react";

import "./style.css";

const arr = ["one", "two", "three", "four", "five"];

function App() {
  const [checked, setChecked] = useState(new Array(arr.length).fill(false));
  const [labels, setLabels] = useState(arr);

  const createCheckboxes = () => {
    return labels.map((el, idx) => {
      return (
        <li key={el + idx}>
          <input
            onChange={() => handleCheck(idx)}
            id={el}
            type="checkbox"
            checked={checked[idx]}
          />
          <label htmlFor={el}>{el}</label>
        </li>
      );
    });
  };

  const handleCheck = (idx) => {
    const newChecked = [...checked];
    newChecked[idx] = !newChecked[idx];
    setChecked(newChecked);
  };

  const handleDelete = () => {
    const newLabels = labels.filter((label, idx) => {
      return !checked[idx];
    });
    setLabels(newLabels);
    setChecked(new Array(newLabels.length).fill(false));
  };

  const handleReset = () => {
    setLabels(arr);
    setChecked(new Array(arr.length).fill(false));
  };

  return (
    <div className="main">
      <div className="btns">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <ul>{createCheckboxes()}</ul>
    </div>
  );
}

export default App;
