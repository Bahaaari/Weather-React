import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="weatherForecast">
      <div className="weatherForecastDay">{formatDay()}</div>
      <img src={iconUrl} alt="forecast" width="42" />
      <div className="weather-forecast-temperature">
        <span className="forecast-temperature-max">{maxTemp()}</span>
        <span className="forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
