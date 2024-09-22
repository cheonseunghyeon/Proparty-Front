import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";
import Calendar from "routes/Calender";
import Visitor from "../routes/Visitor";
import Mypage from "routes/Mypage";
import Publish from "routes/component/project/publish";
import Detail from "routes/component/project/detail";
import Projects from "routes/component/project/projects";
import Team from "routes/component/project/Team";
import Com from "routes/component/project/community";
import Write from "routes/component/project/write";
import Mains from "routes/component/project/mains";
import Mains2 from "routes/component/project/ProjectDe";
import Mains3 from "routes/component/project/ComDe";
import Write2 from "routes/component/project/write/write2";
import Write3 from "routes/component/project/write/write3";
import Mains4 from "routes/component/project/ComDe";
import Pros from "routes/component/project/Pros";
import Teams from "routes/component/project/Teams";
import { GlobalStyles } from "styles/GlobalStyles";
import { RouterBody, RouterHead } from "styles/layout/AppRouterStyles";

// 로그인 여부에 따라 render가 바뀜
// Router 들만 보이게 함
const AppRouter = ({ isLoggedIn, userObj }) => {
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
              <Route path="/profile" element={<Profile userObj={userObj} />} />
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
