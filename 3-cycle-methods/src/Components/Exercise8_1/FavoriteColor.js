import React from "react";

class FavoriteColor extends React.Component {
  state = { favoriteColor: "green" };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ favoriteColor: "white" });
    }, 1000);
  };

  componentDidUpdate = () => {
    document.querySelector(
      "#something"
    ).textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="something"></div>
      </div>
    );
  }
}

export default FavoriteColor;
