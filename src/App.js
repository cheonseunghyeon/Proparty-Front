import AppRouter from "./router/AppRouter";
import React, { useEffect } from "react";
import { authService } from "./fbase";
import useStore from "./store"; // Zustand 스토어 임포트

function App() {
  const { setUserObj, setIsLoggedIn, setInit, init, isLoggedIn, userObj } =
    useStore();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        if (user.displayName === null) {
          const name = user.email.split("@")[0];
          user.displayName = name;
        }
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [setUserObj, setIsLoggedIn, setInit]);

  return <div>{init ? <AppRouter /> : "초기화 중"}</div>;
}

export default React.memo(App);
