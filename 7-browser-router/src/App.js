import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mainContainer">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Products/:id" component={ProductDetail} />
        </div>
      </div>
    );
  }
}

export default App;
