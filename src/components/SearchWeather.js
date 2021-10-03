import {React,useState} from 'react'

function SearchWeather({city,setCity}){
    const [place,setPlace]= useState(city)
    function onChange (e){
        setPlace(e.target.value)
    }
    function onKeyPress (e){
        if(e.key==='Enter'){
            setCity(e.target.value)
        }
    }
    return (
    <>
        <input type = 'text' value = {place} 
            onChange = {(e)=>onChange(e)}
            onKeyPress = {onKeyPress}
        ></input>
        
    </>

    )

}

export default SearchWeather;