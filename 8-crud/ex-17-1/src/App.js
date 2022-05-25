import React from "react";
import Shop from "./Components/Shop";

import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Shop />
      </div>
    );
  }
}

export default App;
