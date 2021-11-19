import React, { useState } from "react";
import axios from "axios";
import Forcast from "./Forcast";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("Tehran");
  let [weather, setWeather] = useState({});
  let apiKey = "0d4847b8ed5adf866001a54ef0a28029";

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }

  function fetchData(response) {
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: response.data.dt * 1000,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });
  }

  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fetchData);
  }

  function handleSubmit(event) {
    event.preventdefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city ..."
            className="form-control"
            id="search-input"
            onChange={updateCity}
          />
        </div>
        <div className="col-3 p-0">
          <input type="submit" value="Search" class="btn w-100" />
        </div>
      </div>
    </form>
  );
  let lastDate = formatDate(weather.date);

  return (
    <div>
      {form}
      <br />
      <div className="row mt-5">
        <div className="col-6">
          <h1 id="city">{weather.city}</h1>
          <ul>
            <li>
              <span id="date">{lastDate}</span>
            </li>
            <li>
              Humidity: <span id="humidity">{weather.humidity}</span>%, Wind:
              <span id="wind">
                {weather.wind}
                <span id="windSpeed"></span>Km/h
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6 clearfix icon-temp">
          <img src={weather.icon} alt="" id="icon" class="float-start" />

          <span id="temperature">{weather.temperature}°C</span>
        </div>
      </div>
      <Forcast coordinates={weather.coordinates} />
    </div>
  );
}
