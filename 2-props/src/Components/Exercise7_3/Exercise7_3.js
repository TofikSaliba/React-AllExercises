import React from "react";
import "./Exercise7_3.css";

class IncrementDecrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 0, colorClass: "zero" };
  }
  incDecBtn = ({ target: { id } }) => {
    this.setState((prevState) => {
      const bool = id === "inc" ? prevState.val < 10 : prevState.val > -10;
      const added = id === "inc" ? 1 : -1;
      return {
        val: bool ? prevState.val + added : prevState.val,
        colorClass:
          prevState.val + added === 0
            ? "zero"
            : prevState.val + added > 0
            ? "positive"
            : "negative",
      };
    });
  };

  render() {
    return (
      <div>
        <button id="inc" onClick={this.incDecBtn}>
          Increment
        </button>
        <button id="dec" onClick={this.incDecBtn}>
          Decrement
        </button>
        <br />
        <span className={this.state.colorClass}>{this.state.val}</span>
      </div>
    );
  }
}

export default IncrementDecrement;
