import React, { useEffect, useRef, useState } from "react";
import ants from "./video/ants.mp4";

import "./style.css";

function App() {
  const [playPause, setPlayPause] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (playPause) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [playPause]);

  return (
    <div className="main">
      <video ref={videoRef}>
        <source src={ants} type="video/mp4" />
      </video>
      <div className="btns">
        <h3>with 2 buttons:</h3>
        <button
          onClick={() => {
            if (!playPause) setPlayPause(true);
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            if (playPause) setPlayPause(false);
          }}
        >
          Pause
        </button>
        <h3>with 1 buttons using useEffect:</h3>
        <button onClick={() => setPlayPause((prev) => !prev)}>
          Play/Pause
        </button>
      </div>
    </div>
  );
}

export default App;
