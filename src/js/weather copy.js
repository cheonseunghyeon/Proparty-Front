const API_KEY = "1c5a9c9e1bfd93bfc309f022705f7756";

//유저의 위치를 주는 함수
//navigator.geolocation.getCurrentPosition - 이 함수 호출시 브라우저에서 위치 좌표 추출
// WIFI GPS ..

// navigator.geolocation.getCurrentPosition - 코드 설명
// argument 2개 존재 (성공 했을 때 함수, 에러 발생 시 함수)

// 정상 처리 시 실행
function onGeoOK(position){
    
    // 내 브라우저의 위도 경도 좌표
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =
     `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // call API 

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        const name = data.name;
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = `${Math.floor(data.main.temp)}˚C`;})
    // Javascript가 브라우저에 요청하여 API url에 방문하지 않아도 url내부의 자체정보를 브라우저로 가져옴 (Network 탭에서 확인)
    
    }
// user 정보등을 못받을 경우 실행
function onGeoError(){
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
