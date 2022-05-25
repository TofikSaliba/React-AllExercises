import React from "react";
import Input from "./Input";
import CatCard from "./CatCard";
import { API } from "../API";

class Shop extends React.Component {
  state = {
    catsArr: [],
    catToAdd: { name: "", img: "", kind: "", price: "", phone: "" },
    submitted: false,
  };

  componentDidMount = async () => {
    try {
      const { data } = await API.get("/cats");
      this.setState({ catsArr: data });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
          handleDelete={this.deleteCat}
        />
      );
    });
  };

  deleteCat = async (id) => {
    try {
      const { statusText } = await API.delete(`/cats/${id}`);
      if (statusText === "OK") {
        this.setState((prev) => {
          return {
            catsArr: prev.catsArr.filter((cat) => {
              return cat.id !== id;
            }),
          };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  getInput = (value, key) => {
    this.setState((prev) => {
      return {
        catToAdd: { ...prev.catToAdd, [key]: value },
      };
    });
  };

  addCat = async (event) => {
    try {
      event.preventDefault();
      const data = await API.post("/cats", this.state.catToAdd);
      if (data.statusText === "Created") {
        this.setState((prev) => {
          return {
            catsArr: [...prev.catsArr, data.data],
            catToAdd: { name: "", img: "", kind: "", price: "", phone: "" },
          };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

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
              value={this.state.catToAdd.name}
            />
            <Input
              id="img"
              callBack={this.getInput}
              type="url"
              holder="Image Url"
              value={this.state.catToAdd.img}
            />
            <Input
              id="kind"
              callBack={this.getInput}
              type="text"
              holder="Kind"
              value={this.state.catToAdd.kind}
            />
            <Input
              id="price"
              callBack={this.getInput}
              type="number"
              holder="Price"
              value={this.state.catToAdd.price}
            />
            <Input
              id="phone"
              callBack={this.getInput}
              type="tel"
              holder="phone"
              value={this.state.catToAdd.phone}
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
