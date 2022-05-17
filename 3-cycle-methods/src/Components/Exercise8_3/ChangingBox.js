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
    this.state = { color: "blue" };
    this.shape = "square";
    this.counter = 0;
    this.intId = 0;
  }

  componentDidMount = () => {
    this.intID = setInterval(() => {
      this.counter++;
      if (this.counter % 5 === 0) {
        this.shape = this.shape === "circle" ? "square" : "circle";
      }
      this.setState({ color: this.colors[this.getRandom()] });
      clearInterval(this.intID);
    }, 500);
  };

  getRandom = () => {
    let random = (Math.random() * 10) | 0;
    while (this.colors[random] === this.state.color) {
      random = (Math.random() * 10) | 0;
    }
    return random;
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
