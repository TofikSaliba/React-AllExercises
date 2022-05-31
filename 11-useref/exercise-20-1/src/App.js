import React, { useState } from "react";
import FetchData from "./Components/FetchData";

import "./style.css";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle On/Off</button>
      <div>{toggle && <FetchData />}</div>
    </div>
  );
}

export default App;
