import React, { useEffect, useState } from "react";
import fbase from "./fbase";
import { authService } from "./fbase";
import useUserStore from "store/store";
import AppRouter from "router/AppRouter";
function App() {
  const { userObj, setUserObj, setIsLoggedIn, setInit, init, isLoggedIn } =
    useUserStore();
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
  }, []);
  //
  return (
    <div>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "초기화 중"
      )}
    </div>
  );
}
export default App;
