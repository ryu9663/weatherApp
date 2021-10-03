import {React,useState,useEffect} from 'react'

function WeatherOfCity({weather,temp,wind}){
    return (
        <div className = 'column'>
            <span>날씨 : {weather}</span>
            <span>온도 : {Math.round(temp*100/100)}</span>
            <span>바람 : {wind}</span>
        </div>
    )
}

export default WeatherOfCity;