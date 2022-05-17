import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }
  incrementBtn = () => {
    this.setState((prevState) => {
      return { val: prevState.val + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementBtn}>Increment</button>
        <span> {this.state.val}</span>
      </div>
    );
  }
}

export default Increment;
