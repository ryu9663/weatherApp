
10.3


https://user-images.githubusercontent.com/66232436/135865756-017ec5af-c179-4019-b7fd-a0c10b5c32d6.mov






검색창에 도시 이름을 적으면 sidebar의 목록에 도시들의 정보가 추가된다.
sidebar에 도시를 클릭하면 메인창에 클릭한 도시의 날씨정보가 나타나도록 했다.
아직 CSS는 하지 않았다.

-----
10.4


![날씨앱 둘째날](https://user-images.githubusercontent.com/66232436/135865341-3d7baec1-93cb-4749-a33c-2cf87fed236d.gif)

css를 추가했다.

## 고칠것

1. sidebar 기능 구현
2. `navigation.geolocation.getCurrentPosition(위치받는함수,에러함수)`를 이용하여 사용자의 위치(위도,경도)를 획득할 수 있다는 사실을 알았다.
    이를 이용해 openWeatherAPI에서 사용자의 현재 위치를 얻어낼수 있는데, 내가 처음에 사용했던 API는 도시를 검색하여 날씨를 얻어내는 API이다.

다음주 주말에 여유가 된다면 `navigation.geolocation.getCurrentPosition(위치받는함수,에러함수)` 를 이용해 사용자의 현재 위치의 날씨를 자동으로 알려주는 기능 구현을 해보자.

 
