import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function App() {
  const [toggle, setToggle] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    if (!toggle) inputRef.current.focus();
  }, [toggle]);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      {toggle ? (
        <button onClick={handleClick}>Edit</button>
      ) : (
        <>
          <button onClick={handleClick}>Save</button>
          <input ref={inputRef} />
        </>
      )}
    </div>
  );
}

export default App;
