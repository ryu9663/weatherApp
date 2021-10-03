import {React,useState,useEffect} from 'react'

function WeatherOfCity({currentCity}){
    return (
        <div className = 'column'>
                                    <div>도시 이름 : {currentCity.name}</div>
                        <div>날씨 : {currentCity.weather[0].main}</div>
                        <div>{Math.round((currentCity.main.temp-273)*100/100)}도</div>
                        <div></div>
        </div>
    )
}

export default WeatherOfCity;