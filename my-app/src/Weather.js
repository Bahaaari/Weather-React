import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function fetchData(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiKey = "0d4847b8ed5adf866001a54ef0a28029";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fetchData);
  }

  function handleSubmit(event) {
    event.preventdefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="mt-2" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city ..."
            className="form-control"
            id="search-input"
            outoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-3 p-0">
          <input type="submit" value="Search" class="btn w-100" />
        </div>
      </div>
    </form>
  );
  if (weatherData.ready) {
    return (
      <div className="weather">
        {form}
        <WeatherInfo data={weatherData} />
        <WeatherForcast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
