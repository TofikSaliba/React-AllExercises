import React from "react";
import EXERCISE11_1 from "./Components/Exercise11_1/ColoredBtn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ["blue", "red", "yellow"];
    this.state = { selected: "" };
  }

  onChildBtnClick = (color) => {
    this.setState({ selected: color });
  };

  render() {
    return (
      <div>
        <div className="btnsContainer">
          {this.colors.map((clr) => (
            <EXERCISE11_1
              key={clr}
              color={clr}
              onClick={this.onChildBtnClick}
            />
          ))}
        </div>
        <h1 id="msg">{`The color selected is: ${this.state.selected}`}</h1>
      </div>
    );
  }
}

export default App;
