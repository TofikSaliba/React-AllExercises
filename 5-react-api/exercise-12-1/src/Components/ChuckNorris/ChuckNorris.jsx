import React from "react";
import axios from "axios";
import "./ChuckNorris.css";
import CustomBtn from "../CustomBtn/CustomBtn";
import Select from "../Select/Select";
import ReadInput from "../ReadInput/ReadInput";

class ChuckNorris extends React.Component {
  state = { categories: [], selectedCat: "all", currentJoke: "" };

  getRandomJoke = async () => {
    let joke;
    if (this.state.selectedCat === "all") {
      joke = await axios.get("https://api.chucknorris.io/jokes/random");
    } else {
      joke = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${this.state.selectedCat}`
      );
    }
    this.setState({ currentJoke: joke.data.value });
  };

  getSelectedCategory = (value) => {
    this.setState({ selectedCat: value });
  };

  getSearchQuery = async (query) => {
    const jokes = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    const domEls = jokes.data.result.map((jokeObj) => {
      return (
        <div className="searchedJoke" key={jokeObj.id}>
          {jokeObj.value}
        </div>
      );
    });
    this.setState({ searchJokes: domEls });
  };

  componentDidMount = async () => {
    const categories = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: categories.data });
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="randomJokeContainer">
          <h1>
            Click the "Get Joke" button to show a random joke or choose a
            category for a random joke from that category
          </h1>
          <div className="btn-select">
            <CustomBtn
              text="Get Joke"
              callBackFunc={this.getRandomJoke}
              disabled={false}
            />
            <Select
              categories={this.state.categories}
              getSelectedCategory={this.getSelectedCategory}
            />
          </div>
          <p className="randomJoke">{this.state.currentJoke}</p>
        </div>
        <hr />
        <div className="jokeSearchContainer">
          <h1>You can also search for multiply jokes</h1>
          <ReadInput getSearchQuery={this.getSearchQuery} />
          <div className="searchResult">{this.state.searchJokes}</div>
        </div>
      </div>
    );
  }
}

export default ChuckNorris;
