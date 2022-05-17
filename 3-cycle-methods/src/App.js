import React from "react";
// import EXERCISE8_1 from "./Components/Exercise8_1/FavoriteColor";
// import EXERCISE8_2 from "./Components/Exercise8_2/BoxAnimation";
// import EXERCISE8_3 from "./Components/Exercise8_3/ChangingBox";
import EXERCISE9_1 from "./Components/Exercise9_1/Spinner";

class App extends React.Component {
  //! NOTE: that the constructor and componentDidMount here are only used for exercise 9_1, to set the timeout for the spinner display
  constructor(props) {
    super(props);
    //? choose time limit here.
    this.timeLimit = 5;
    this.intIDs = [0, 0];
    this.IDsIdx = 0;
    this.state = { isHidden: "visible" };
  }

  componentDidMount = () => {
    let counter = 0;
    this.intIDs[this.IDsIdx] = setInterval(() => {
      counter++;
      if (counter === this.timeLimit) {
        this.setState({ isHidden: "hidden" });
        clearInterval(this.intIDs[0]);
      }
      clearInterval(this.intIDs[1]);
    }, 1000);
    this.IDsIdx++;
  };

  render() {
    return (
      <div>
        {/* <EXERCISE8_1 /> */}
        {/* <EXERCISE8_2 className="mediumBox" /> */}
        {/* <EXERCISE8_2 className="largeBox" /> */}
        {/* <EXERCISE8_2 className="smallBox" /> */}
        {/* <EXERCISE8_3 /> */}
        <EXERCISE9_1 display={this.state.isHidden} />
      </div>
    );
  }
}

export default App;
