import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="App-wrapped">
        <Weather defaultCity="Tehran" />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="#" target="_blank" rel="noreferrer">
          Bahareh Babaei
        </a>{" "}
        and is{" "}
        <a href="#" target="_blank" rel="noreferrer">
          open-sourced on Githab
        </a>
      </footer>
    </div>
  );
}

export default App;
