import React from "react";
import "./ChangingBox.css";

class ChangingBox extends React.Component {
  constructor(props) {
    super(props);
    this.colors = [
      "red",
      "green",
      "blue",
      "black",
      "yellow",
      "purple",
      "aqua",
      "orange",
      "pink",
      "brown",
    ];
    this.shape = "square";
    this.counter = 0;
    this.state = { color: "blue" };
  }

  componentDidMount = () => {
    this.setState({ color: "blue" });
  };

  componentDidUpdate = () => {
    let getRandom = (Math.random() * 10) | 0;
    while (this.colors[getRandom] === this.state.color) {
      getRandom = (Math.random() * 10) | 0;
    }
    this.setConfigs(getRandom);
  };

  setConfigs = (getRandom) => {
    const timeID = setTimeout(() => {
      this.setState({ color: this.colors[getRandom] });
      clearTimeout(timeID);
      this.counter++;
      if (this.counter % 5 === 0) {
        this.shape = this.shape === "circle" ? "square" : "circle";
      }
    }, 500);
  };

  render() {
    return (
      <div className="ChangingBox">
        <div className={`box ${this.state.color} ${this.shape}`}></div>
      </div>
    );
  }
}

export default ChangingBox;
