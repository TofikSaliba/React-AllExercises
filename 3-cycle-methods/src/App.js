import React from "react";
// import EXERCISE8_1 from "./Components/Exercise8_1/FavoriteColor";
// import EXERCISE8_2 from "./Components/Exercise8_2/BoxAnimation";
import EXERCISE8_3 from "./Components/Exercise8_3/ChangingBox";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <EXERCISE8_1 /> */}
        {/* <EXERCISE8_2 className="mediumBox" /> */}
        {/* <EXERCISE8_2 className="largeBox" /> */}
        {/* <EXERCISE8_2 className="smallBox" /> */}
        <EXERCISE8_3 />
      </div>
    );
  }
}

export default App;
