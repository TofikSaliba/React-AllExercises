import React from "react";
import data from "./data/data";
import Name from "./Components/Name";
import Card from "./Components/Card";
import "./App.css";

class App extends React.Component {
  state = { names: [], bornBefore: [] };

  getAllNames = () => {
    const names = data.map((obj) => obj.name);
    this.setState({ names: names });
  };

  getBornBeforeYear = (year) => {
    const objs = data.filter((obj) => {
      return Number(obj.birthday.split("-")[2]) < year;
    });
    this.setState({ bornBefore: objs });
  };

  render() {
    console.log(data);
    return (
      <div className="mainContainer">
        <div className="names">
          <button onClick={this.getAllNames}>Get names</button>
          <Name names={this.state.names} />
        </div>
        <div className="bornBefore">
          <button onClick={() => this.getBornBeforeYear(1990)}>
            Get Born Before
          </button>
          <Card objs={this.state.bornBefore} />
        </div>
      </div>
    );
  }
}

export default App;
