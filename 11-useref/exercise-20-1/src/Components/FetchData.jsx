import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const getJoke = async () => {
      try {
        const joke = await axios.get(
          "https://api.chucknorris.io/jokes/random",
          {
            signal: controller.signal,
          }
        );
        setJoke(joke.data.value);
      } catch (err) {
        console.log(err);
      }
    };

    getJoke();
    return () => {
      controller.abort();
    };
  }, []);
  return <div>{joke}</div>;
}

export default FetchData;
