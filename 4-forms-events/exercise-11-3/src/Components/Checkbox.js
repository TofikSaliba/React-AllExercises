import React from "react";
import "./form.css";

class Checkbox extends React.Component {
  state = {
    checked: this.props.checked,
    required: this.props.required || false,
  };

  onCheckboxChange(newVal) {
    this.setState((prev) => {
      return {
        checked: !prev.checked,
      };
    });
    this.props.onChangeCB(this.props.id, newVal);
  }

  render() {
    return (
      <div className="checkContainer">
        <input
          id={this.props.id}
          type="checkbox"
          onChange={(e) => this.onCheckboxChange(e.target.checked)}
          required={this.state.required}
          checked={this.state.checked}
        />
        <label id="terms" htmlFor={this.props.id}>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default Checkbox;
