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
import useUserStore from "store/store";

const Profile = () => {
  const { userObj, setUserObj } = useUserStore(); // Zustand 상태 가져오기
  const [newDisplayName, setnewDisplayName] = useState(
    userObj?.displayName || ""
  );
  const navigate = useNavigate();

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

    const user = authService.currentUser;

    if (!user) {
      console.error("로그인된 사용자를 찾을 수 없습니다.");
      return;
    }

    if (user.displayName !== newDisplayName) {
      try {
        await updateProfile(user, { displayName: newDisplayName });
        setUserObj({ ...userObj, displayName: newDisplayName });

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
                />
                <FormButton type="submit" value="Update Profile" />
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
