import SearchWeather from './components/SearchWeather.js';
import WeatherOfCity from './components/WeatherOfCity.js';
import Sidebar from './layout/Sidebar.js';
import {React,useState,useEffect} from 'react'
import styled from "styled-components";
import dummy from './dummy.js';

import './App.css';

function App() {
  const [currentCity,setCurrentCity] = useState(dummy)
  const [city,setCity] = useState('Seoul')
  
  const [infoList,setInfoList] = useState([])
  
  const getWeather = async () => {
    let url = ''
    if(city)  
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=479b71bd8170440dd418a65c5c00da87`
    else
    url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=479b71bd8170440dd418a65c5c00da87`
    
    const response = await fetch(url)
    
    const responseJson = await response.json()
    
    if(responseJson){
      // console.log(responseJson)
      // setInfo(responseJson)
      const newInfoList = [...infoList,responseJson]
      setInfoList(newInfoList)
      
      // console.log(responseJson.weather[0].main)
    }
    
    
    
    
    
  }
  // function addCityList(info){//sidebar에 추가될 도시 리스트
  //   const newInfoList = [...infoList,info]
  //   setInfoList(newInfoList)
  //   // console.log(infoList)
  // }
  useEffect(()=>{
    // console.log(city)
    getWeather(city)
    // addCityList(info)
    
  
  },[city])
  


 

  return (
    <div className = 'row'>
      <div className = 'sidebar'>
        <Sidebar infoList = {infoList} setCurrentCity={setCurrentCity}/>
      </div>  
      <div className = 'column pink'>
        <div className = 'searchBox'>
          <SearchWeather city = {city} setCity = {setCity} />
        </div>
        <WeatherOfCity currentCity = {currentCity} />
      </div>
    </div>
      
    
  );
}

export default App;
