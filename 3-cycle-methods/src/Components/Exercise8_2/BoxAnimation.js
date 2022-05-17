import React from "react";
import "./BoxAnimation.css";

class BoxAnimation extends React.Component {
  componentDidMount = () => {
    const box = document.querySelector(`.${this.props.className}`);
    setTimeout(() => {
      box.classList.add("slide");
    }, 1000);
  };

  render() {
    return (
      <div>
        <div className={`${this.props.className}`}></div>
      </div>
    );
  }
}

export default BoxAnimation;
