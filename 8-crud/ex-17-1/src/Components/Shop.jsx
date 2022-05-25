import React from "react";
import Input from "./Input";
import CatCard from "./CatCard";
import { API } from "../API";

class Shop extends React.Component {
  state = { catsArr: [] };

  componentDidMount = async () => {
    const { data } = await API.get("/cats");
    this.setState({ catsArr: data });
    console.log(data);
  };

  displayCats = () => {
    return this.state.catsArr.map((cat) => {
      return (
        <CatCard
          key={cat.id}
          id={cat.id}
          name={cat.name}
          img={cat.img}
          kind={cat.kind}
          phone={cat.phone}
          price={cat.price}
        />
      );
    });
  };

  getInput = (value) => {
    console.log(value);
  };

  addCat = () => {};

  render() {
    return (
      <>
        <div className="inputHeader">
          <form onSubmit={this.addCat}>
            <Input
              id="name"
              callBack={this.getInput}
              type="text"
              holder="Name"
            />
            <Input
              id="img"
              callBack={this.getInput}
              type="url"
              holder="Image Url"
            />
            <Input
              id="kind"
              callBack={this.getInput}
              type="text"
              holder="Kind"
            />
            <Input
              id="price"
              callBack={this.getInput}
              type="number"
              holder="Price"
            />
            <Input
              id="phone"
              callBack={this.getInput}
              type="tel"
              holder="phone"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="catCards">{this.displayCats()}</div>
      </>
    );
  }
}

export default Shop;
