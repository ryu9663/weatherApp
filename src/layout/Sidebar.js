import { React, useState } from "react";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 4rem; */

  .normal {
    background-color: rgba(255, 255, 255, 0.5) !important;
    color: black;
  }
  .hover--over {
    background-color: rgba(255, 255, 255, 0.3) !important;
    color: black;
  }
  .normal:hover {
    /* background-color : #f0ffff; */
    background-color: rgba(255, 255, 255, 0.6) !important;
    color: black;

    .radiusAndPadding {
      padding: 1rem;
      border-radius: 10px;
    }
  }
`;
// const SelectedColumn = styled.div`
//     &:hover {
//         background-color : #f0ffff;
//         color : 	#00ffff;
//     }
// `

function Sidebar({ infoList, currentCity, setCurrentCity }) {
  const [isOn, setIsOn] = useState(false);

  function hoverHandler() {
    if (isOn) setIsOn(false);
    else setIsOn(true);
  }
  // if(infoList) console.log(infoList)
  // else return null
  function onClick(info) {
    console.log("currnet", currentCity.name);
    setCurrentCity(info);
  }
  // console.log(currentCity)
  if (infoList.length === 0) return "도시를 선택해주세요";
  return (
    <>
      <Column>
        {infoList.map((info, idx) => {
          // console.log(info.data)
          return (
            <div
              style={{ margin: "2px" }}
              key={idx}
              onClick={() => onClick(info.data)}
              onMouseOver={hoverHandler}
              // onMouseDown = {hover}
              className={
                info.data.name === currentCity.name ? "hover--over normal radiusAndPadding" : "normal radiusAndPadding"
              }
            >
              <div>{info.data.name}</div>
              <div>{info.data.weather[0].main}</div>
              <div>{Math.round(((info.data.main.temp - 273) * 100) / 100)}°C</div>
              <div></div>
            </div>
          );
        })}
      </Column>
    </>
  );
}

export default Sidebar;
