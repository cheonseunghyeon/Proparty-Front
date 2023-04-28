//유저의 위치를 주는 함수
//navigator.geolocation.getCurrentPosition - 이 함수 호출시 브라우저에서 위치 좌표 추출
// WIFI GPS ..

// navigator.geolocation.getCurrentPosition - 코드 설명
// argument 2개 존재 (성공 했을 때 함수, 에러 발생 시 함수)

// 정상 처리 시 실행
function onGeoOk(position) {
    // 내 브라우저의 위도 경도 좌표
    const lat = position.coords.latitude
    const long = position.coords.longitude
    console.log("you live in ",lat,long)
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
// user 정보등을 못받을 경우 실행
function onGeoError(){
    alert("can't")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//API를 통해서 우리의 위치에 관련된 날씨 정보 받아오기
// API는 다른 서버와 이야기 하는 방법이다
//