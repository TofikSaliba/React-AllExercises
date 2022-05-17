import React from "react";
import "./Exercise7_2.css";

class HideBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHidden: false };
  }
  changeDisplay = () => {
    this.setState((prevState) => {
      return { isHidden: !prevState.isHidden };
    });
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.changeDisplay}>Show/Hide</button>
        {this.state.isHidden && <div className="box"></div>}
      </div>
    );
  }
}

export default HideBox;
