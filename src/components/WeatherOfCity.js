import { React, useState, useEffect } from "react";
import Image from "./Image.js";
import styled from "styled-components";
import { current } from "immer";

const WeatherBox = styled.div`
  /* background-color : rgba(255,255,255,0.5); */
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  width: 300px;
  text-align: center;

  .superBigFont {
    font-size: 80px;
    margin-bottom: 1rem;
  }
  .bigFont {
    font-size: 50px;
    margin-bottom: 1rem;
  }
  .middleFont {
    font-size: 25px;
    margin-bottom: 1rem;
  }
  .clock {
    margin: 20px;
  }
`;

//1638106205
function WeatherOfCity({ currentCity }) {
  const date = new Date();

  const [time, setTime] = useState(
    `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(
      date.getSeconds()
    ).padStart(2, "0")}`
  );

  function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    setTime(`${hours}:${minutes}:${sec}`);
  }
  setInterval(getClock, 1000);

  // ! 일출,일몰인데 외국 시간 이상하게 떠서 보류
  // const sunRiseUnix = currentCity.sys.sunrise;
  // const sunSetUnix = currentCity.sys.sunset;

  // const sunRiseHours = String(new Date(sunRiseUnix*1000).getHours()).padStart (2,"0");
  // const sunSetHours = String(new Date(sunSetUnix*1000).getHours()).padStart (2,"0");
  // const sunRiseMinutes = String(new Date(sunRiseUnix*1000).getMinutes()).padStart (2,"0");
  // const sunSetMinutes = String(new Date(sunSetUnix*1000).getMinutes()).padStart (2,"0");
  if (Object.keys(currentCity).length === 0) return "hi";
  return (
    <WeatherBox>
      <div className="superBigFont clock">{time}</div>
      <div className="middleFont">
        {currentCity.name},{currentCity.sys.country}
      </div>
      <div className="middleFont">{currentCity.weather[0].main}</div>
      <div className="bigFont">{Math.round(((currentCity.main.temp - 273) * 100) / 100)}°C</div>
      <div className="middleFont">wind : {currentCity.wind.speed} m/s</div>
      <div className="middleFont">pressure : {currentCity.main.pressure / 1000} kpa</div>
      <div className="middleFont">humidity : {currentCity.main.humidity} %</div>

      {/* <div className = 'middleFont'>Sun rise : {sunRiseHours}:{sunRiseMinutes}</div> */}
      {/* <div className = 'middleFont'>Sun set : {sunSetHours}:{sunSetMinutes}</div> */}
    </WeatherBox>
  );
}

export default WeatherOfCity;
