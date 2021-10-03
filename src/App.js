import SearchWeather from './components/SearchWeather.js'
import WeatherOfCity from './components/WeatherOfCity.js';
import {React,useState,useEffect} from 'react'
import styled from "styled-components";


import './App.css';

function App() {
  const [city,setCity] = useState('Seoul')
  const [weather,setWeather] = useState()
  const [temp,setTemp] = useState()
  const [wind,setWind] = useState()
  
  const getWeather = async () => {
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=479b71bd8170440dd418a65c5c00da87`

    const response = await fetch(url)

    const responseJson = await response.json()
    
    
    const newWeather = await responseJson.weather[0].main
    const newTemp = await responseJson.main.temp-273
    const newWind = await responseJson.wind.speed
    if(responseJson){
      setWeather(newWeather)
      setTemp(newTemp)
      setWind(newWind)
      console.log(weather) 
    }
    
  }
  useEffect(()=>{
    // console.log(city)
    getWeather(city)
  
  },[city])
  


 

  return (
    <div className = 'column'>
      <SearchWeather city = {city} setCity = {setCity} />
      <WeatherOfCity weather = {weather} temp = {temp} wind = {wind} />
    </div>
      
    
  );
}

export default App;
