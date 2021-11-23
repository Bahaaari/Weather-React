import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="App-wrapped">
          <Weather defaultCity="Tehran" />
        </div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/bahareh-babaei-8b0b1653/"
            target="_blank"
            rel="noreferrer"
          >
            Bahareh Babaei
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Bahaaari/Weather-React"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Githab
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
