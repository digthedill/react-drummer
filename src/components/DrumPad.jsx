import React, { useEffect, useRef, useState } from "react";
import "../App.css";

//write a pushedButtonStyle here

function DrumPad(props) {
  const audioRef = useRef(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    audioRef.current.play();
    props.setCurrentDrum(props.name);
  };
  //need to fix pad display potentially a context solution.
  return (
    <div className="drum-pad" id={props.keyTrigger} onClick={playSound}>
      <audio
        className="clip"
        ref={audioRef}
        src={props.src}
        keyCode={props.keyCode}
        name={props.name}
      >
        {props.id}
      </audio>
      <h3
        style={{
          color: "black",
          padding: "2rem",
          fontWeight: "800",
        }}
      >
        {props.id}
      </h3>
    </div>
  );
}

export default DrumPad;
