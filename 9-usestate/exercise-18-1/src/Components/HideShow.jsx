import React, { useState } from "react";

function HideShow({ text, length }) {
  const [showing, setShowing] = useState(false);

  const handleClick = () => {
    setShowing((prev) => !prev);
  };

  const getJSX = () => {
    if (text.length <= length) {
      return <p>{text}</p>;
    } else {
      return (
        <>
          {showing ? (
            <p>
              {text}
              <span onClick={handleClick}>showless</span>
            </p>
          ) : (
            <p>
              {text.slice(0, length)}...
              <span onClick={handleClick}>read more</span>
            </p>
          )}
        </>
      );
    }
  };

  return <>{getJSX()}</>;
}

export default HideShow;
