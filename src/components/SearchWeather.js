import React, { useState } from "react";
import styled from "styled-components";

const FixedComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  /* position: fixed; */
  top: 0;
  z-index: 2;
  width: 200px;
  /* height: 50px; */
  /* background-color: rgba(255,255,255,0.5); */
`;
const TextBox = styled.input`
  width: 130px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
`;

function SearchWeather({ city, setCity, infoList }) {
  const [place, setPlace] = useState("");
  function onChange(e) {
    setPlace(e.target.value);
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      setCity(e.target.value);
      // 검색후 다시 빈칸만들기
      setPlace("");
    }
  }
  return (
    <FixedComponent>
      <TextBox
        type="text"
        value={place}
        onChange={(e) => onChange(e)}
        onKeyPress={onKeyPress}
        placeholder="도시를 입력해주세요"
        list="infoList"
      ></TextBox>
      <datalist id="infoList">
        {infoList.map((info, idx) => {
          // console.log(infoList)
          return <option key={idx} value={info.data.name} />;
        })}
      </datalist>
    </FixedComponent>
  );
}
// export default SearchWeather;
export default React.memo(SearchWeather, (p, n) => {
  //   console.log(p.city === n.city);
  return p.city === n.city;
});
