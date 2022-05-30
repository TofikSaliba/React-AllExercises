import React, { useEffect, useState } from "react";
import { API } from "./API";

import "./style.css";

function App() {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const [submitTerm, setSubmitTerm] = useState("hooks");
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { hits },
        } = await API.get(submitTerm);
        setResults(
          hits.map((hit) => {
            return {
              title: hit.title ? hit.title : hit.story_title,
              url: hit.url ? hit.url : hit.story_url,
              id: hit.objectID,
            };
          })
        );
        setSpinning((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [submitTerm]);

  const getResultsJSX = () => {
    return results.map((result) => {
      return (
        <li key={result.id}>
          <a href={result.url} target="_blank" rel="noreferrer">
            {result.title}
          </a>
        </li>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!term) {
      return;
    }
    setSpinning((prev) => !prev);
    setSubmitTerm(term);
    setTerm("");
  };

  return (
    <div className="container">
      <h1>Algolia Search</h1>
      <form onSubmit={handleSubmit} className="searchInput">
        <input onChange={(e) => setTerm(e.target.value)} value={term} />
        <button type="submit">Search</button>
      </form>
      {spinning ? (
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="results">
          <ul>{getResultsJSX()}</ul>
        </div>
      )}
    </div>
  );
}

export default App;
