import React, { useEffect, useRef, useState } from "react";

import "./style.css";

function App() {
  //! for solution 1
  const [solutionTwoSrc, setSolutionTwoSrc] = useState("bw");

  //! for solution 2
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.src = require("./assets/images/img-1-bw.jpg");
  }, []);

  const toggleImg = (val) => {
    imgRef.current.src = require(`./assets/images/img-1-${val}.jpg`);
  };

  return (
    <div>
      {/* solution 1: normal using useState */}
      <img
        src={require(`./assets/images/img-2-${solutionTwoSrc}.jpg`)}
        alt={"2"}
        onMouseEnter={() => setSolutionTwoSrc("clr")}
        onMouseLeave={() => setSolutionTwoSrc("bw")}
      />

      {/* solution 2: using useRef and useEffect */}
      <img
        ref={imgRef}
        alt={"1"}
        onMouseEnter={() => toggleImg("clr")}
        onMouseLeave={() => toggleImg("bw")}
      />
    </div>
  );
}

export default App;
