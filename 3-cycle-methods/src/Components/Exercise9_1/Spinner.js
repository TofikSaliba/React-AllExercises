import React from "react";
import "./Spinner.css";

class Spinner extends React.Component {
  render() {
    return (
      <div>
        <div className={`style1 ${this.props.display}`}></div>
      </div>
    );
  }
}

export default Spinner;
