import React from "react";
import logoWhite from "./logo-white.svg";
import logoGreen from './logo-green.svg';

export let darkMode = false;

if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
  console.log("🎉 prefers-color-scheme is supported");
  darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log("Dark mode OS preference is " + darkMode);
}

function App() {
  return (
    <div className="root">
      <header className="header">
        <img src={darkMode ? logoWhite : logoGreen} className="logo" alt="logo" />
        <h1 className="title is-family-monospace">turtle.army</h1>
        <a className="app-link" href="https://explorer.turtle.army">
          explorer
        </a>
      </header>
    </div>
  );
}

export default App;
