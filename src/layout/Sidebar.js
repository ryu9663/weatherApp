import {React,useState } from 'react'
import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 4rem; */
    
    
    .normal{
        background-color: rgba(255,255,255,0.5) !important;
        color : black;
    }
    .hover--over{
        background-color: rgba(255,255,255,0.3) !important;
        color : black;
    }
    .normal:hover{
        /* background-color : #f0ffff; */
        background-color: rgba(255,255,255,0.6) !important;
        color : black;

    .radiusAndPadding{
        padding : 1rem;
        border-radius: 10px;
    }
    }
`
// const SelectedColumn = styled.div`
//     &:hover {
//         background-color : #f0ffff;
//         color : 	#00ffff;
//     }
// `

function Sidebar({city,infoList,currentCity,setCurrentCity}){
    
    const [isOn,setIsOn] = useState(false)
    if(city.length===0)return '도시목록이 없습니다.'
    function hoverHandler(){
        if(isOn)setIsOn(false)
        else setIsOn(true)
    }
    // if(infoList) console.log(infoList)
    // else return null
    function onClick (info){
        console.log('currnet',currentCity.name)
        setCurrentCity(info)
    }
    console.log(currentCity)
    if(infoList.length===0)return '도시를 선택해주세요'
    return (<Column >
        {infoList.map((info,idx)=>{
            
            return (
                
                <div style = {{margin : '2px'}} key = {idx} 
                onClick = {()=>onClick(info)}
                onMouseOver = {hoverHandler}
                // onMouseDown = {hover}
                className = {info.name === currentCity.name ? 'hover--over normal radiusAndPadding' : 'normal radiusAndPadding'}
                >
                    
                        <div>{info.name}</div>
                        <div>{info.weather[0].main}</div>
                        <div>{Math.round((info.main.temp-273)*100/100)}°C</div>
                        <div></div>
                        
                </div>
                
            )
        })}
        </Column>
    )
}

export default Sidebar