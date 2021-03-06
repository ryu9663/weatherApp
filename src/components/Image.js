import { React, useState, useEffect } from "react";
import rain from "../img/rain.png";
import cloudy from "../img/cloudy.png";
import clear from "../img/clear.png";
import mist from "../img/mist2.png";
import haze from "../img/haze.png";
import snow from "../img/snow.png";

const styles = {
  backgroundSize: "cover",
  minWidth: "100%",
  //relative하면 안된다.
  position: "fixed",
  zIndex: "-9",
  opacity: "0.6",
};

function Image({ weather }) {
  console.log(weather);
  if (!weather) {
    alert("도시목록이 없습니다.");
  }
  if (weather === "Clouds") {
    return (
      <img alt="구름" src={cloudy} style={styles} />
      // <img alt = '구름' src = {require('../img/cloudy.png')}/>
    );
  } else if (weather === "Rain") {
    return (
      <img alt="비" src={rain} style={styles} />
      // <img alt = '구름' src = {require('../img/cloudy.png')}/>
    );
  } else if (weather === "Clear") {
    return (
      <img alt="맑음" src={clear} style={styles} />
      // <img alt = '구름' src = {require('../img/cloudy.png')}/>
    );
  } else if (weather === "Mist" || weather === "Haze") {
    return (
      <img alt="안개" src={mist} style={styles} />
      // <img alt = '구름' src = {require('../img/cloudy.png')}/>
    );
  } else if (weather === "Snow") {
    return (
      <img alt="눈" src={snow} style={styles} />
      // <img alt = '구름' src = {require('../img/cloudy.png')}/>
    );
  }
}

export default Image;
