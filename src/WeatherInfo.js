import React from "react";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="row mt-5">
      <div className="col-6">
        <h1 id="city">{props.data.cityName}</h1>
        <ul>
          <li>
            <span id="date">
              <FormatDate date={props.data.date} />
            </span>
            <span id="skyDescription">{props.data.description}</span>
          </li>
          <li>
            Humidity: <span id="humidity">{props.data.humidity}</span>%, Wind:{" "}
            <span id="wind">{Math.round(props.data.wind)}</span>Km/h
          </li>
        </ul>
      </div>
      <div className="col-6 clearfix icon-temp">
        <img
          src={props.data.icon}
          alt=""
          id="icon"
          class="float-start"
          width="100"
        />

        <span id="temperature">{Math.round(props.data.temperature)}</span>
        <span id="unit">°C</span>
      </div>
    </div>
  );
}
