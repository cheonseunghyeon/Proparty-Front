import { authService, dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";

import {
  FormButton,
  FormInput,
  ImageButton,
  LogOutButton,
  ProfileBody,
  ProfileContainer,
  ProfileForm,
  ProfileImage,
} from "styles/pages/ProfilepageStyle";
import {
  BookCover,
  BookDot,
  HomeContents,
  MenuBar,
  MenuBarLiA,
  MiniroomTitle,
  Page,
} from "styles/pages/MypageStyles";

// 로그아웃 기능 생성
// 최신 버전은 useNavigate 라는 Hook을 통해서 url 변경 가능
const Profile = ({ userObj, setUserObj }) => {
  const navigate = useNavigate();
  const [newDisplayName, setnewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };

  const getMyNweets = async () => {
    const q = query(
      collection(dbService, "DBTable"),
      where("creatorId", "==", userObj.uid),
      orderBy("createdAt")
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };
  useEffect(() => {
    getMyNweets();
  }, []);

  const onsubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      try {
        await updateProfile(userObj, { displayName: newDisplayName });

        setUserObj((prev) => ({ ...prev, displayName: newDisplayName }));

        navigate("/");
      } catch (error) {
        console.error("프로필 업데이트 오류:", error);
      }
    } else {
      navigate("/");
    }
  };

  const onchange = (event) => {
    const {
      target: { value },
    } = event;
    setnewDisplayName(value);
  };

  return (
    <BookCover>
      <BookDot>
        <Page>
          <HomeContents>
            <MiniroomTitle>
              <br />
              <strong>profile</strong>
            </MiniroomTitle>
            <ProfileContainer>
              <ProfileImage className="ProImg" src="/img/profile.png" />
              <ProfileForm onSubmit={onsubmit}>
                <ImageButton
                  type="submit"
                  value="Image Change"
                  className="formBtn2"
                />
                <FormInput
                  onChange={onchange}
                  type="text"
                  autoFocus
                  placeholder="Display name"
                  value={newDisplayName}
                  className="formInput"
                />
                <FormButton
                  type="submit"
                  value="Update Profile"
                  className="formBtn"
                />
              </ProfileForm>
              <LogOutButton onClick={onLogOutClick}>Log Out</LogOutButton>
            </ProfileContainer>
          </HomeContents>

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
  );
};
export default React.memo(Profile);
