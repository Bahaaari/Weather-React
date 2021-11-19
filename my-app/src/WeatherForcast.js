import React, { useState } from "react";

export default function WeatherForcast(props) {
  let [forecast, setForecast] = useState(null);
  return <div class="weather-forecast" id="forecast"></div>;
}
