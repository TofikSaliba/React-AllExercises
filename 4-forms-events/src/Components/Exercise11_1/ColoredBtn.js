import React from "react";
import "./ColoredBtn.css";

class ColoredBtn extends React.Component {
  render() {
    return (
      <button
        className={this.props.color}
        onClick={() => this.props.onClick(this.props.color)}
      >
        {this.props.color}
      </button>
    );
  }
}

export default ColoredBtn;
