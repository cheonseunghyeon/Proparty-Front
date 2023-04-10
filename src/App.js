import AppRouter from "./components/AppRouter"
import React, { useEffect, useState } from "react";
import fbase  from "./fbase"
import { authService } from "./fbase";
import 'App.css'
function App() {
  const [init,setInit] = useState(false);
  // firebase가 프로그램을 초기화 하길 기다려야 한다
  //currentUser 속성을 사용하여 현재 로그인한 사용자를 가져올 수도 있습니다. 
  //사용자가 로그인 상태가 아니라면 currentUser 값이 null입니다.
  // 초기값은 null
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 사용자가 누군지 정의
  const [userObj, setUserObj] = useState(null);
  // ,[] <- 컴포넌트가 mount 될 때 실행 - 처음만 실행되고 실행 안됨
  // user가 변화되면 실행
  // 변화가 있는지 물어보는 것
  // 만약 init이 flase 라면 router를 숨겨야 하기 때문
  useEffect(()=>{
    // onAuthStateChanged를 이용해서 로그인인지 아닌지 확인할 수 있다.
    // 유저가 없다면 isLoggedIn은 false - Router는 Home을 보게 바꾼다
    // 유저가 존재한다면 isLoggedIn은 true
    // authService 값이 변경되면(로그인 되면) - 유저 정보 전달
     authService.onAuthStateChanged((user) => {
     if (user){
      setIsLoggedIn(true);
      setUserObj(user);
     }else{
      setIsLoggedIn(false);
     }
     setInit(true);
    });
  }, [])

  return (
    <div>
    {/* init이 false이라는 것은 로그인이 됐다는 것 */}
    {init ? <AppRouter isLoggedIn ={isLoggedIn} userObj={userObj}/> : "초기화 중"}
    </div>
  );
}

export default App;
