import React from "react";
import "./App.css";
import DrumMachine from "./components/DrumMachine";
import Head from "./components/Head";

document.body.style.backgroundImage =
  'url("https://w.wallhaven.cc/full/kw/wallhaven-kw1xq1.jpg")';

function App() {
  return (
    <div className="App">
      <Head />
      <DrumMachine />
    </div>
  );
}

export default App;
