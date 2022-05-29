import React, { useState } from "react";
import "./style.css";

function App() {
  const [data, setData] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const checkUncheck = (idx) => {
    const newData = [...data];
    newData[idx].completed = !newData[idx].completed;
    setData([...newData]);
  };

  const getJSX = () => {
    return data.map(({ name, completed }, idx) => {
      const className = completed ? "done" : "todo";
      const symbol = completed ? "✔" : "❌";
      return (
        <div key={name + idx}>
          <span className={className}>{name}</span>{" "}
          <span className="click" onClick={() => checkUncheck(idx)}>
            {symbol}
          </span>
        </div>
      );
    });
  };

  return <div className="container">{getJSX()}</div>;
}

export default App;
