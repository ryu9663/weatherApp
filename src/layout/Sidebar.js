import {React } from 'react'
import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

function Sidebar({infoList,setCurrentCity}){
    // if(infoList) console.log(infoList)
    // else return null
    function onClick (info){
        console.log(info)
        setCurrentCity(info)
    }
    return (<Column>
        {infoList.map((info,idx)=>{
            // console.log('info',info)
            return (
                <div style = {{margin : '2px'}} key = {idx} onClick = {()=>onClick(info)}>
                    
                        <div>도시 이름 : {info.name}</div>
                        <div>날씨 : {info.weather[0].main}</div>
                        <div>{Math.round((info.main.temp-273)*100/100)}도</div>
                        <div></div>
                        
                </div>
            )
        })}
        </Column>
    )
}

export default Sidebar