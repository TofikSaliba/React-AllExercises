import React from "react";
import "./Checkboxes.css";

class Checkboxes extends React.Component {
  state = { checked: this.props.checked };

  onCheckboxChange() {
    this.setState((prev) => {
      return { checked: !prev.checked };
    });
  }

  render() {
    return (
      <div>
        <input
          id={this.props.id}
          type="checkbox"
          onChange={() => this.onCheckboxChange()}
          checked={this.state.checked}
        />
        <label htmlFor={this.props.id}>{this.props.text}</label>
      </div>
    );
  }
}

export default Checkboxes;
