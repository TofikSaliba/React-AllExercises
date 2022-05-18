import React from "react";
import EXERCISE11_2 from "./Components/Checkboxes";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <EXERCISE11_2
            id="read"
            text="I read the term of the app"
            checked={false}
          />
          <EXERCISE11_2
            id="accept"
            text="I accept the term of the app"
            checked={false}
          />
          <EXERCISE11_2
            id="news"
            text="I want to get the weekly news letter"
            checked={true}
          />
          <EXERCISE11_2
            id="sales"
            text="I want to get sales and offers"
            checked={true}
          />
        </form>
      </div>
    );
  }
}

export default App;
