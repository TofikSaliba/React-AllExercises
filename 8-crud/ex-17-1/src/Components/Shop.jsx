import React from "react";
import Input from "./Input";
import CatCard from "./CatCard";
import { API } from "../API";

class Shop extends React.Component {
  state = {
    catsArr: [],
    catToAdd: { name: "", img: "", kind: "", price: "", phone: "" },
    isSpinning: true,
  };

  componentDidMount = async () => {
    try {
      const { data } = await API.get("/cats");
      this.setState({ catsArr: data, isSpinning: false });
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
          getUpdated={this.getUpdated}
        />
      );
    });
  };

  deleteCat = async (id) => {
    try {
      this.setState({ isSpinning: true });
      const { statusText } = await API.delete(`/cats/${id}`);
      if (statusText === "OK") {
        this.setState((prev) => {
          return {
            catsArr: prev.catsArr.filter((cat) => {
              return cat.id !== id;
            }),
            isSpinning: false,
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
      this.setState({ isSpinning: true });
      event.preventDefault();
      const data = await API.post("/cats", this.state.catToAdd);
      if (data.statusText === "Created") {
        this.setState((prev) => {
          return {
            catsArr: [...prev.catsArr, data.data],
            catToAdd: { name: "", img: "", kind: "", price: "", phone: "" },
            isSpinning: false,
          };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  getUpdated = async (newKind, newPhone, newPrice, id) => {
    try {
      this.setState({ isSpinning: true });
      const catToUpdate = this.state.catsArr.find((cat) => cat.id === id);
      const updatedCat = {
        ...catToUpdate,
        kind: newKind,
        phone: newPhone,
        price: newPrice,
      };
      const { data, statusText } = await API.put(`/cats/${id}`, updatedCat);
      if (statusText === "OK") {
        this.setState((prev) => {
          return {
            catsArr: prev.catsArr.map((cat) => {
              if (cat.id === id) {
                return data;
              }
              return cat;
            }),
            isSpinning: false,
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
        {this.state.isSpinning ? (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="catCards">{this.displayCats()}</div>
        )}
      </>
    );
  }
}

export default Shop;
