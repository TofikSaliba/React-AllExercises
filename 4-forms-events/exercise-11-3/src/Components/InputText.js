import React from "react";
import "./form.css";

class InputText extends React.Component {
  state = { val: this.props.value, required: this.props.required || false };

  onInputChange(newVal) {
    this.setState({ val: newVal });
    this.props.onChangeCB(this.props.id, newVal);
  }

  render() {
    return (
      <div className="inputTextDiv">
        <label htmlFor={this.props.id}>{this.props.text}</label>
        <input
          id={this.props.id}
          type="text"
          value={this.state.val}
          placeholder={this.props.id}
          required={this.state.required}
          onChange={(e) => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default InputText;
