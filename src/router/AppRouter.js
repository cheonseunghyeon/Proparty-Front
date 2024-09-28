import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Auth from "../components/Auth";
import Home from "../components/Home";
import Navigation from "./Navigation";
import Profile from "components/Profile";
import Calendar from "components/Calender";
import Visitor from "../components/Visitor";
import Mypage from "components/Mypage";
import Publish from "components/component/pages/publish";
import Detail from "components/component/pages/detail";
import Projects from "components/component/pages/projects";
import Team from "components/component/pages/Team";
import Com from "components/component/pages/community";
import Write from "components/component/pages/write";
import Mains from "components/component/pages/mains";
import Mains2 from "components/component/pages/ProjectDe";
import Mains3 from "components/component/pages/ComDe";
import Write2 from "components/component/pages/write2";
import Write3 from "components/component/pages/write3";
import Mains4 from "components/component/pages/ComDe";
import Pros from "components/component/pages/Pros";
import Teams from "components/component/pages/Teams";
import { GlobalStyles } from "styles/GlobalStyles";
import { RouterBody, RouterHead } from "styles/layout/AppRouterStyles";

// 로그인 여부에 따라 render가 바뀜
// Router 들만 보이게 함
const AppRouter = ({ isLoggedIn, userObj, setUserObj }) => {
  return (
    <>
      {GlobalStyles}
      <RouterHead>{isLoggedIn && <Navigation userObj={userObj} />}</RouterHead>
      <RouterBody>
        <Routes>
          {isLoggedIn ? (
            <>
              {/* props로 전달 */}
              <Route path="/" element={<Home userObj={userObj} />} />
              <Route path="/Vlog" element={<Mypage userObj={userObj} />} />
              <Route
                path="/profile"
                element={<Profile userObj={userObj} setUserObj={setUserObj} />}
              />
              <Route path="/Visitor" element={<Visitor userObj={userObj} />} />
              <Route path="/Diary" element={<Calendar />} />
              <Route path="/Publish" element={<Publish />} />
              <Route path="/Detail" element={<Detail />} />
              <Route path="/Project" element={<Projects />} />
              <Route path="/Project/:no" element={<Mains2 />} />
              <Route path="/Project/0" element={<Mains4 />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Team/:no" element={<Mains />} />
              <Route path="/Com" element={<Com />} />
              <Route path="/Com/:no" element={<Mains3 />} />
              <Route path="/Write" element={<Write />} />
              <Route path="/TeamWrite" element={<Write2 />} />
              <Route path="/ComWrite" element={<Write3 />} />
              <Route path="/Mains" element={<Mains />} />
              <Route path="/ProCard" element={<Pros />} />
              <Route path="/TeamCard" element={<Teams />} />
            </>
          ) : (
            <Route path="/" element={<Auth />} />
          )}
        </Routes>
      </RouterBody>
    </>
  );
};
export default AppRouter;
