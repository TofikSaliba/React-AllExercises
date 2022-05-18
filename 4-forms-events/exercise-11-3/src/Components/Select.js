import React from "react";
import "./form.css";

class Select extends React.Component {
  state = { val: this.props.value };

  onInputChange(newVal) {
    this.setState({ val: newVal });
    this.props.onChangeCB(this.props.id, newVal);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.text}</label>
        <select
          id={this.props.id}
          value={this.state.val}
          onChange={(e) => this.onInputChange(e.target.value)}
        >
          <option value="select age" disabled>
            select age
          </option>
          <option value="0-18">0-18</option>
          <option value="18-30">18-30</option>
          <option value="30-50">30-50</option>
          <option value="over 50">over 50</option>
        </select>
      </div>
    );
  }
}

export default Select;
