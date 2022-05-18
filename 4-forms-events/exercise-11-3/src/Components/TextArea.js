import React from "react";
import "./form.css";

class TextArea extends React.Component {
  state = { val: this.props.value };

  onInputChange(newVal) {
    this.setState({ val: newVal });
    this.props.onChangeCB(this.props.id, newVal);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.text}</label>
        <br />
        <textarea
          id={this.props.id}
          value={this.state.val}
          rows="5"
          cols="50"
          placeholder="Tell us..."
          onChange={(e) => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }
}

export default TextArea;
