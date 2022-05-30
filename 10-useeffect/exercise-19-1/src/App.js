import React, { useEffect, useState } from "react";
import { API } from "./API";

import "./style.css";

function App() {
  const [ApiData, setApiData] = useState({});

  useEffect(() => {
    const rand = (Math.random() * 6 + 1) | 0;
    const getData = async () => {
      try {
        const { data } = await API.get(`/${rand}`);
        setApiData({
          title: data.title,
          director: data.director,
          producer: data.producer,
          date: data.release_date,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const getMovieData = () => {
    return (
      <>
        <div>
          <span>Name: </span>
          {ApiData.title}
        </div>
        <div>
          <span>Director: </span>
          {ApiData.director}
        </div>
        <div>
          <span>Producer(s): </span>
          {ApiData.producer}
        </div>
        <div>
          <span>Release date: </span>
          {ApiData.date}
        </div>
      </>
    );
  };

  return <div className="container">{getMovieData()}</div>;
}

export default App;
