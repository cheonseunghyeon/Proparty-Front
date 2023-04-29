/*
// 1. HTML에서 필요한 것들을 JS로 읽어오기

//const loginform = document.querySelector(".login-form");
//const loginInput = loginform.querySelector("input")
//const loginButton = loginform.querySelector("button")

// 문장 축소하는 법
const loginInput = document.querySelector(".login-form input")
const loginButton = document.querySelector(".login-form button")

function onLoginClicked(){
    console.dir(loginInput.value)
    alert("sex");
}

loginButton.addEventListener("click",onLoginClicked)

//2. 입력이 존재할 때만 버튼이 실행되게 
const loginInput = document.querySelector(".login-form input")
const loginButton = document.querySelector(".login-form button")

function onLoginClicked(){
    const username = loginInput.value
    if(username == ''){
        console.log("통과")
    }else if(username.length > 5){
        alert("이름이 너무 길다")
    }
}

loginButton.addEvent  Listener("click",onLoginClicked)


// 3. 존재하는 기술 사용.
// html은 input을 사용할 때 최대 길이 등을 먼저 설정할 수 있다.
// 즉 유효성 검사를 굳이 js로 할 필요가 없다.
// input의 유효성 검사를 위해선 form이 들어가 있어야 한다
// form은 submit 시킨다.
//JavaScript에서 구현하는 대신 할 수 있다면 HTML의 기본 속성을 최대한 이용하기
const loginInput = document.querySelector(".login-form input")
const loginButton = document.querySelector(".login-form button")

function onLoginClicked(){
    const username = loginInput.value
    console.log(username);
}

loginButton.addEventListener("click",onLoginClicked)


// submit 이벤트 
// fomr의 submit event 감지
// - 버튼 클릭이나 enter 키 감지
// form에서 submit 발생 시 입력값 받아내기
// 브라우저는 엔터 누를 때 새로고침 + form submit 하게 동작
// 이렇게 새로고침되는걸 방지하기 위해선
const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input")

function onSubmit(event){
    const username = loginInput.value;
    console.log(username);
    // 브라우저가 어떤 정보를 가져오는지 알아보기
    // JS 엔진은 함수 실행시 암묵적으로 argument와 this 할당
    //argument 분석 - 실행되는 이벤트의 정보를 준다
    // preventDefault - function의 기본 동작을 막는다
    // 지금으로썬 브라우저가 submit을 막는것이라 생각하면 좋다
    event.preventDefault();
    console.log(event);
}
// onSubmit() 같이 이벤트 함수를 작성하지 않는건 
//()를 붙인다는건 function을 바로 실행한다는 의미이기 때문
// 정확하게 말하기
// onSubmit()호출시 브라우저는 
// onSubmit(info)의 형태로 - argument로 정보를 넣어서 실행
loginForm.addEventListener("submit",onSubmit)
// 순서 정리
// 1. submit 이벤트 발생 시 이벤트 리스너로 인해 onSubmit 이벤트 함수 실행
// 2. 이벤트 객체(함수)는 각각 argument를 가지고 있다.
// 3. 이 argument를 조작(preventDefault)해서 기본 동작(submit)을 방지

// 이벤트 처리 - 링크 이벤트
const Link = document.querySelector("a");

// 클릭 이벤트 함수
// 이벤트 함수의 argument는 발생된 event의 정보를 가지고 있다
function onhandclick(event){
    // 전과 다른 것은 mouse 이벤트이다. - 클릭 이벤트
    event.preventDefault();
    console.log(event);
    // alert는 특이하게 실행되는 동안 모든 이벤트를 막음
    //alert("sex");
}
// 중요) 이벤트 함수를 실행하는 것은 JS 엔진이다
// ()를 붙이면 함수 한번 실행되고 끝이지만 
// 이벤트 발생 시 JS엔진이 자동으로 이벤트 함수를 실행하기 때문
Link.addEventListener("click",onhandclick)


// form을 없애는 방법

// 1. css를 이용한 조작
// css에 display: none을 작성 - 요소를 숨겨주는 역활
const loginForm = document.querySelector(".login-form")
const loginInput = document.querySelector(".login-form input")
const text = document.querySelector("#greeting")
// 중요한 변수가 아니라면 대문자로
const HIDDENCS = "hidden"

function onSubmit(event){
    const username = loginInput.value;
    console.log(username);
    event.preventDefault();
    console.log(event);

    // 아이디 입력 창 없애고, 아이디 출력
    loginForm.classList.add(HIDDENCS);
    text.classList.remove(HIDDENCS);
    text.innerText = `HELLO ${username}`;
}

loginForm.addEventListener("submit",onSubmit)
*/
// 브라우저 저장소를 사용해서 api 구축
// localStorage - 사용

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
// 현재 기록된 local 데이터가 없다면 null
// 중요한 변수가 아니라면 대문자로
const HIDDENCS = "hidden"
const USERNAME_KEY = "username"




// greeting을 그리는 함수 생성
// 이 함수가 실행됐다는 건 이미 로컬 저장소에 정보가 있다는 뜻
function paintGreeting(){
    const localname = localStorage.getItem(USERNAME_KEY);
    // greeting의 텍스트 추가 + hidden 삭제
    greeting.innerText = `${localname}`;
    greeting.classList.remove(HIDDENCS);
}

// submit에서 유저 정보는 input으로 부터 오고있다
//localStorage는 로컬 저장소로 부터 유저 정보를 가지고 오고 있다
// 이 처럼 
function onSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDENCS);
    const username = loginInput.value;
    
    // 아이디 입력 창 없애고, 아이디 출력
    localStorage.setItem(USERNAME_KEY,username)
    paintGreeting(username)
}

// 유저 정보가 있는지 확인하는 용도
const savedUsername = localStorage.getItem(USERNAME_KEY);

// null 이라면 input의 hidden을 삭제해서 숨김 없애고 submit 이벤트 리스너 생성
if(savedUsername === null){
    loginForm.classList.remove(HIDDENCS);
    loginForm.addEventListener("submit",onSubmit)
}else{
    paintGreeting(savedUsername)
}