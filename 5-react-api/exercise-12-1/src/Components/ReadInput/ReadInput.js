import React from "react";
import "./ReadInput.css";

class ReadInput extends React.Component {
  state = { errorMsg: "" };

  onSubmit = (event) => {
    event.preventDefault();
    let inputEl = event.target.firstChild;
    this.props.getSearchQuery(inputEl.value);
    inputEl.value = "";
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" className="inputText" />
          <button type="submit">Search</button>
        </form>
        <div className="errorMsg">{this.state.errorMsg}</div>
      </>
    );
  }
}

export default ReadInput;
