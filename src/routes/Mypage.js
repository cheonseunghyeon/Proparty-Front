import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService } from "fbase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import img from "../img/profile.png";
import img2 from "../img/back3.jpg";

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
  UpdatedNewsLeft,
  MiniroomTitle,
  MiniroomGif,
  UpdatedNewsRight,
  MenuBar,
  MenuBarLiA,
  UpdatedNewsTitle2,
  UpdatedNewsRed,
  UpdatedNewsBlue,
  UpdatedNewsRightNumber,
  UpdatedNewsRightItem,
  UpdatedNewsLeftItem,
  HomeContents,
} from "../styles/MypageStyles";

const Mypage = ({ userObj }) => {
  useEffect(() => {
    // 어떤 행동을 취했을 때 DB가 그것을 감지해서 사용 할 수 있도록
    const q = query(
      collection(dbService, "DBTable"),
      orderBy("createdAt", "desc")
    );
  }, []);

  return (
    <BookCover>
      <BookDot>
        <Page>
          <Home>
            <HomeMain>
              <Profile>
                <Profile1>
                  <ProfileImage src={img} />
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
              <HomeContents>
                <UpdatedNewsTitle2>
                  <br />
                  <strong>{userObj.displayName}의 미니 홈페이지</strong>
                </UpdatedNewsTitle2>

                <UpdatedNewsTitle>
                  <br />
                  <strong>Updated news</strong>
                </UpdatedNewsTitle>

                <UpdatedNewsContents>
                  <UpdatedNewsLeft>
                    <UpdatedNewsLeftItem>
                      <UpdatedNewsRed>&nbsp;Diary&nbsp;</UpdatedNewsRed>{" "}
                      2023-05-22
                    </UpdatedNewsLeftItem>
                    <UpdatedNewsLeftItem>
                      <UpdatedNewsBlue>&nbsp;photo&nbsp;</UpdatedNewsBlue>{" "}
                      테스트 용
                    </UpdatedNewsLeftItem>
                    <UpdatedNewsLeftItem>
                      <UpdatedNewsBlue>&nbsp;photo&nbsp;</UpdatedNewsBlue>{" "}
                      테스트 이미지
                    </UpdatedNewsLeftItem>
                    <UpdatedNewsLeftItem>
                      <UpdatedNewsRed>&nbsp;Diary&nbsp;</UpdatedNewsRed>{" "}
                      2023-05-23
                    </UpdatedNewsLeftItem>
                  </UpdatedNewsLeft>
                  <UpdatedNewsRight>
                    <UpdatedNewsRightItem>
                      다이어리{" "}
                      <UpdatedNewsRightNumber>2/25</UpdatedNewsRightNumber>
                      &emsp;&emsp;&emsp;&emsp;사진첩{" "}
                      <UpdatedNewsRightNumber>0/25</UpdatedNewsRightNumber>
                    </UpdatedNewsRightItem>
                    <UpdatedNewsRightItem>
                      게시판{" "}
                      <UpdatedNewsRightNumber>2/25</UpdatedNewsRightNumber>
                      &emsp;&emsp;&emsp;&emsp;&emsp;방명록{" "}
                      <UpdatedNewsRightNumber>0/25</UpdatedNewsRightNumber>
                    </UpdatedNewsRightItem>
                  </UpdatedNewsRight>
                </UpdatedNewsContents>

                <MiniroomTitle>
                  <br />
                  <strong>Miniroom</strong>
                </MiniroomTitle>
                <div>
                  <MiniroomGif src={img2} />
                </div>
              </HomeContents>
            </HomeMain>
          </Home>

          <MenuBar>
            <li>
              <MenuBarLiA as={Link} to="/">
                Home
              </MenuBarLiA>
            </li>
            <li>
              <MenuBarLiA as={Link} to="/profile">
                Profile
              </MenuBarLiA>
            </li>
            <li>
              <MenuBarLiA as={Link} to="/Diary">
                Diary
              </MenuBarLiA>
            </li>
            <li>
              <MenuBarLiA as={Link} to="/">
                Photo
              </MenuBarLiA>
            </li>
            <li>
              <MenuBarLiA as={Link} to="/Visitor">
                Visitor
              </MenuBarLiA>
            </li>
            <li>
              <MenuBarLiA as={Link} to="/Visitor">
                Chat
              </MenuBarLiA>
            </li>
          </MenuBar>
        </Page>
      </BookDot>
    </BookCover>
  );
};

export default Mypage;
