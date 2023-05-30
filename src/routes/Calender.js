import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/Home.css'
import '../css/Layout.css'
import { Form, Link } from "react-router-dom";
import 'react-calendar/dist/Calendar.css'; // css import
import img from "./char.png"

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <div class="bookcover">
      <div class="bookdot">
        <div class="page">
          <div class="home">

            <div class="home_main">
              <div class="profile">
                <div class="profile_1">
                  <img class="profile_image" src={img}/>
                </div>
                <div class="profile_2"> 프로필 작성 공간<br/>
                <br/>프로필을 설명할 수 있는 공간 입니다.</div>
                <div class="profile_3">* 주소 등을 기록하는 공간
                  <div class="profile-dropdown">
                    <div class="dropdown-btn">
                      <div class="dropdown-title">Github</div>
                      <div class="triangle-down"></div>
                    </div>
                    <div class="dropdown-content">
                      <a href="https://programming-oddments.tistory.com/" target="_blank">Devlog</a>
                      <a href="https://github.com/joseph-106" target="_blank">Github</a>
                      <a href="https://www.instagram.com/ksj_106/" target="_blank">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_contents">
                <div class="updated_news_title"><br/><strong>Calendar</strong></div>
                <div class="updated_news_contents">
                    <section>
                        <Calendar className={"DiaryEditor"} onChange={onChange} value={value} />
                    </section>
                </div>
                <div class="miniroom_title"><br/><strong>Diary</strong></div>
                <div>
                    <input type={"date"} />
                    <input type='button' value={"확인"}/><br/>
                    <textarea
                            placeholder="오늘은 어땠나요?" />
                </div>
                
              </div>
            </div>
          </div>
          <ul class ="menu_bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/Diary">Diary</Link></li>
            <li><Link to="/">Photo</Link></li>
            <li><Link to="/">Visitor</Link></li>
            <li><Link to="/Visitor">Chat</Link></li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyApp