import {React,useState} from 'react'
import styled from "styled-components";

const FixedComponent = styled.div`
    
`


function SearchWeather({city,setCity}){
    const [place,setPlace]= useState(city)
    function onChange (e){
        setPlace(e.target.value)
    }
    function onKeyPress (e){
        if(e.key==='Enter'){
            setCity(e.target.value)
            // console.log(e.target.value)
        }
    }
    return (
    <FixedComponent>
        <input type = 'text' value = {place} 
            onChange = {(e)=>onChange(e)}
            onKeyPress = {onKeyPress}
        ></input>
        
    </FixedComponent>

    )

}

export default SearchWeather;