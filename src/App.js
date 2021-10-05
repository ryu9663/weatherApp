import SearchWeather from './components/SearchWeather.js';
import WeatherOfCity from './components/WeatherOfCity.js';
import Sidebar from './layout/Sidebar.js';
import Image from './components/Image.js';
import {React,useState,useEffect} from 'react'
import APIKEY from './APIkey.js'
import styled from "styled-components";
import dummy from './dummy.js';

import './App.css';
import LoadingIndicator from './components/LoadingIndicator.js';
// const Image = styled.img`
//   background-size : cover;
// `

function App() {
  //사용자의 현재 위치를 받아서 currentCity에 할당할 수 있어야 한다.
  const [currentCity,setCurrentCity] = useState(dummy)
  const [city,setCity] = useState('jecheon')
  //!나중에 로딩화면 넣을때 써먹을것들
  const [isLoading,setIsLoading] = useState(true)
  const [infoList,setInfoList] = useState([])
  
  

  const getWeather = async () => {
    let url = ''
    if(city)  
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    else{
      // return 'Not found'
      url = `https://api.openweathermap.org/data/2.5/weather?q=jecheon&appid=${APIKEY}`
    }
    
    
    // const response = await fetch(url)
    
    // const responseJson = await response.json()
    return fetch(url).then(res=>res.json()).then(responseJson=>{
      if(responseJson){
        const newInfoList = [...infoList,responseJson]
        //!나중에 로딩화면 넣을때 써먹을것들
        setIsLoading(true)
        setInfoList(newInfoList)
        setIsLoading(false)
      }
    })
    
    // if(responseJson){
    //   const newInfoList = [...infoList,responseJson]
    //   setInfoList(newInfoList)
    // }
  }
  // console.log(currentCity)
  useEffect(()=>{
    getWeather(city)
    
  },[city])

  return (
    <>
    {Object.keys(currentCity).length>0 ? <Image weather = {currentCity.weather[0].main} /> : null }
    <div className = 'row maxheight'>
      
      <div className = 'sidebar radiusAndPadding'>
        <div className = 'searchBox'>
          <SearchWeather style={{width:"100%"}} city = {city} setCity = {setCity} />
        </div>
        <Sidebar city = {city} infoList = {infoList} 
        currentCity = {currentCity}
        setCurrentCity={setCurrentCity}/>
      </div>  
      <div className = 'column pink'>

        <div className = 'weatherOfCity'>
          <WeatherOfCity currentCity = {currentCity} />
          
        </div>
      </div>
    </div>
    </>

      
    
  );
}

export default App;
