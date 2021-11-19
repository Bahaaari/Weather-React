import React, { useState } from "react";

export default function Forcast(props) {
  let [forecast, setForecast] = useState(null);
  return <div class="weather-forecast" id="forecast"></div>;
}
