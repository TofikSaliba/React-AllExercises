import React from "react";
import HideShow from "./Components/HideShow";

import "./style.css";

function App() {
  const length = 80;
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illo eos, quasi eius in modi doloremque magnam voluptate dolor vero. Quibusdam illo eos, quasi eius in modi doloremque magnam voluptate dolor vero. Quibusdam illo eos, quasi eius in modi doloremque magnam voluptate dolor vero.";
  return (
    <div className="container">
      <HideShow text={text} length={length} />
    </div>
  );
}

export default App;
