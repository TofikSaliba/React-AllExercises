import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ChuckNorris.css";
import CustomBtn from "../CustomBtn/CustomBtn";
import Select from "../Select/Select";
import ReadInput from "../ReadInput/ReadInput";

function ChuckNorris() {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("all");
  const [currentJoke, setCurrentJoke] = useState("");
  const [searchJokes, setSearchJokes] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getRandomJoke = async () => {
    try {
      let joke;
      if (selectedCat === "all") {
        joke = await axios.get("https://api.chucknorris.io/jokes/random");
      } else {
        joke = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${selectedCat}`
        );
      }
      setCurrentJoke(joke.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  const getSelectedCategory = (value) => {
    setSelectedCat(value);
  };

  const getSearchQuery = async (query) => {
    try {
      const jokes = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${query}`
      );
      if (jokes.data.result.length === 0) {
        throw new Error("No Jokes Were Found!");
      }
      const domEls = jokes.data.result.map((jokeObj) => {
        return (
          <div className="searchedJoke" key={jokeObj.id}>
            {jokeObj.value}
          </div>
        );
      });
      setErrorMsg("");
      setSearchJokes(domEls);
    } catch (err) {
      setErrorMsg(err.message);
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const categories = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        setCategories(categories.data);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="mainContainer">
      <div className="randomJokeContainer">
        <h1>
          Click the "Get Joke" button to show a random joke or choose a category
          for a random joke from that category
        </h1>
        <div className="btn-select">
          <CustomBtn
            text="Get Joke"
            callBackFunc={getRandomJoke}
            disabled={false}
          />
          <Select
            categories={categories}
            getSelectedCategory={getSelectedCategory}
          />
        </div>
        <p className="randomJoke">{currentJoke}</p>
      </div>
      <hr />
      <div className="jokeSearchContainer">
        <h1>You can also search for multiply jokes</h1>
        <ReadInput errorMsg={errorMsg} getSearchQuery={getSearchQuery} />
        <div className="searchResult">{searchJokes}</div>
      </div>
    </div>
  );
}

export default ChuckNorris;
