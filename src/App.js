import SearchWeather from "./components/SearchWeather.js";
import WeatherOfCity from "./components/WeatherOfCity.js";
import Sidebar from "./layout/Sidebar.js";
import Image from "./components/Image.js";
import { React, useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";

import styled from "styled-components";
import dummy from "./dummy.js";

import "./App.css";
import LoadingIndicator from "./components/LoadingIndicator.js";
// const Image = styled.img`
//   background-size : cover;
// `
require("dotenv").config();
function App() {
  //사용자의 현재 위치를 받아서 currentCity에 할당할 수 있어야 한다.
  const [currentCity, setCurrentCity] = useState({});
  const [city, setCity] = useState("");
  //!나중에 로딩화면 넣을때 써먹을것들
  const [isLoading, setIsLoading] = useState(true);
  const [infoList, setInfoList] = useState([]);

  // console.log(currentCity)
  useEffect(() => {
    const getWeather = async () => {
      navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
          axios.get(url).then((res) => {
            setCity(res.data.name);
            setCurrentCity(res.data);
          });
        },
        (err) => alert("위치권한을 허용해주세요")
      );
    };
    console.log(infoList);
    if (!city && infoList.length === 0) getWeather();
    else if (city) {
      console.log("도시이름", city);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
      axios.get(url).then((res) => {
        setCity(res.data.name);
        setCurrentCity(res.data);
        // console.log("h");
        //중복된다면 추가x
        if (infoList.filter((el) => el.data.name === city).length > 0) {
          return;
        }
        const newInfoList = [...infoList, res];

        setIsLoading(true);
        setInfoList(newInfoList);
        setIsLoading(false);
      });
    }
  }, [city]);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Image weather={currentCity.weather[0].main} />
          <div className="sidebar radiusAndPadding">
            <div className="searchBox">
              <SearchWeather city={city} setCity={setCity} infoList={infoList} />
            </div>
            <Sidebar city={city} infoList={infoList} currentCity={currentCity} setCurrentCity={setCurrentCity} />
          </div>
          <div className="column pink">
            <div className="weatherOfCity">
              <WeatherOfCity currentCity={currentCity} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
