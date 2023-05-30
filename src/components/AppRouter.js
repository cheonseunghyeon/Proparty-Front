import React, { useState } from "react";
import {Route,Router,Routes} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "routes/Profile";
import Calendar from "routes/Calender";
import Home2 from "../routes/Home2";
import '../css/AppRouter.css'
// 로그인 여부에 따라 render가 바뀜
// Router 들만 보이게 함
const AppRouter = ({ isLoggedIn, userObj }) => {
    return(
        <>
        <div className="Mhead">
            {isLoggedIn && <Navigation userObj={userObj}/>}
        </div>
        <div className="Mbody">
            <Routes>
                {isLoggedIn ?(
                    <>
                    {/* props로 전달 */}
                    <Route path="/" element={<Home userObj={userObj} />}/>
                    <Route path="/profile" element={<Profile userObj={userObj}/>}/>
                    <Route path="/Visitor" element={<Home2 userObj={userObj}/>}/>
                    <Route path="/Diary" element={<Calendar/>}/>
                    </>
                ) :(
                <Route path="/" element={<Auth/>}/>)}
            </Routes>
        </div>
    </>
    )
}
export default AppRouter;