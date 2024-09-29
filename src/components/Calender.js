import React, { useState } from "react";
import Calendar from "react-calendar";
import { Form, Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";

import {
  BookCover,
  BookDot,
  Page,
  Home,
  HomeMain,
  Profile,
  Profile1,
  ProfileImage,
  Profile2,
  Profile3,
  ProfileDropdown,
  DropdownBtn,
  DropdownContent,
  TriangleDown,
  UpdatedNewsTitle,
  UpdatedNewsContents,
  MiniroomTitle,
  MenuBar,
  MenuBarLiA,
  DiaryEditor,
} from "../styles/pages/MypageStyles";

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <BookCover>
        <BookDot>
          <Page>
            <Home>
              <HomeMain>
                <Profile>
                  <Profile1>
                    <ProfileImage src="/img/profile.png" />
                  </Profile1>
                  <Profile2>
                    프로필 작성 공간
                    <br />
                    <br />
                    프로필을 설명할 수 있는 공간 입니다.
                  </Profile2>
                  <Profile3>
                    * 주소 등을 기록하는 공간
                    <ProfileDropdown>
                      <DropdownBtn>
                        <div>Github</div>
                        <TriangleDown />
                      </DropdownBtn>
                      <DropdownContent>
                        <a
                          href="https://programming-oddments.tistory.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Devlog
                        </a>
                        <a
                          href="https://github.com/joseph-106"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </a>
                        <a
                          href="https://www.instagram.com/ksj_106/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </DropdownContent>
                    </ProfileDropdown>
                  </Profile3>
                </Profile>

                <div>
                  <UpdatedNewsTitle>
                    <strong>Calendar</strong>
                  </UpdatedNewsTitle>
                  <UpdatedNewsContents>
                    <section>
                      <Calendar
                        className={"DiaryEditor"}
                        onChange={onChange}
                        value={value}
                      />
                    </section>
                  </UpdatedNewsContents>

                  <MiniroomTitle>
                    <strong>Diary</strong>
                  </MiniroomTitle>
                  <div>
                    <input type={"date"} />
                    <input type="button" value={"확인"} />
                    <br />
                    <textarea placeholder="오늘은 어땠나요?" />
                  </div>
                </div>
              </HomeMain>
            </Home>
            <MenuBar>
              <MenuBarLiA as={Link} to="/Vlog">
                Home
              </MenuBarLiA>

              <MenuBarLiA as={Link} to="/profile">
                Profile
              </MenuBarLiA>

              <MenuBarLiA as={Link} to="/Diary">
                Diary
              </MenuBarLiA>

              <MenuBarLiA as={Link} to="/Visitor">
                Visitor
              </MenuBarLiA>
            </MenuBar>
          </Page>
        </BookDot>
      </BookCover>
    </>
  );
}

export default React.memo(MyApp);
