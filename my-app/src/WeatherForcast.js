import React, { useState } from "react";

export default function WeatherForcast(props) {
  let [forecast, setForecast] = useState(null);

  function fetchForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function getForecastAPI() {
    let apiKey = "0d4847b8ed5adf866001a54ef0a28029";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(fetchForecast);
  }
}
