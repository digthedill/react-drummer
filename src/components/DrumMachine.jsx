import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import DrumPad from "./DrumPad";

const soundURLs = {
  comeOn:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Voice/186[kb]cmon-(compressed).aif.mp3",
  hoo:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Voice/93[kb]hoo_(loud).aif.mp3",
  electroClank:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/487[kb]echo-electronictalk.aif.mp3",
  kick:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/14[kb]bangibeats-kick.wav.mp3",
  clap:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/38[kb]clapverby.aif.mp3",
  HH:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/29[kb]909-squoosh-hat.aif.mp3",
  openHH:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/32[kb]hard_ohh.aif.mp3",
  snare:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/15[kb]big-fat-snare2.aif.mp3",
  crash:
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/127[kb]alloy-crash-short.wav.mp3",
};
const drums = [
  {
    url: soundURLs.clap,
    keyCode: 81,
    keyTrigger: "Q",
    id: "clap",
  },
  {
    url: soundURLs.hoo,
    keyCode: 87,
    keyTrigger: "W",
    id: "hoo",
  },
  {
    url: soundURLs.comeOn,
    keyCode: 69,
    keyTrigger: "E",
    id: "comeOn",
  },
  {
    url: soundURLs.HH,
    keyCode: 65,
    keyTrigger: "A",
    id: "HH",
  },
  {
    url: soundURLs.openHH,
    keyCode: 83,
    keyTrigger: "S",
    id: "openHH",
  },
  {
    url: soundURLs.electroClank,
    keyCode: 68,
    keyTrigger: "D",
    id: "electroClank",
  },
  {
    url: soundURLs.kick,
    keyCode: 90,
    keyTrigger: "Z",
    id: "kick",
  },
  {
    url: soundURLs.snare,
    keyCode: 88,
    keyTrigger: "X",
    id: "snare",
  },
  {
    url: soundURLs.crash,
    keyCode: 67,
    keyTrigger: "C",
    id: "crash",
  },
];
function DrumMachine() {
  const [currentDrum, setCurrentDrum] = useState("");

  const grabCurrent = (drum) => setCurrentDrum(drum);
  console.log(currentDrum);
  const drumSystem = drums.map((drum, i) => {
    //fix the box into three equal colomuns
    return (
      <DrumPad
        setCurrentDrum={setCurrentDrum}
        src={drum.url}
        id={drum.keyTrigger}
        key={drum.keyTrigger}
        keyCode={drum.keyCode}
        name={drum.id}
      />
    );
  });
  return (
    <div className="container" id="drum-machine">
      <div className="row">{drumSystem}</div>
      {/* display current sound here ... potentially use context?? */}
      <div className="currentDrum" id="display">
        <h2>{currentDrum.length === 0 ? "press a key" : currentDrum}</h2>
      </div>
    </div>
  );
}

export default DrumMachine;
