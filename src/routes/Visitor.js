import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dbService, storageService } from "fbase";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import Nweet from "../components/Nweet";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
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
import img4 from "../img/profile.png";

// 자동으로 임폴트 됨
// crud 구현

const Visitor = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  // 이미지 파일 관리
  const [attachment, setAttachment] = useState("");

  useEffect(() => {
    // 어떤 행동을 취했을 때 DB가 그것을 감지해서 사용 할 수 있도록
    const q = query(
      collection(dbService, "DBTable"),
      orderBy("createdAt", "desc")
    );
    // onSnapshot 데이터 베이스에 무슨 일이 발생 했을 때 알람이 옴
    // 새로운 스냅샷을 받을 때에는 배열을 may 으로 만듭니다.
    onSnapshot(q, (snapshot) => {
      // DB의 map에 id와 data를 저장
      const DBArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNweets(DBArray);
    });
  }, []);

  // 콜랙션 = 문서들의 모음
  // 문서를 생성
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";

    // 이미지 파일이 존재할 경우
    if (attachment != "") {
      //이미지와 파일 을 저장하는 문서로 생성
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);

      // data_url은  파일 로드할 때 readAsDataURL에서 실행
      const response = await uploadString(fileRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(fileRef, attachment, "data_url");
    }

    const DBTable = {
      text: nweet,
      creatorId: userObj.uid,
      createdAt: Date.now(),
      attachmentUrl,
    };

    const docRef = await addDoc(collection(dbService, "DBTable"), DBTable);
    setNweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    // 이벤트 안에 있는 target의 value를 달라는 뜻
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  // input type="file" 이 변할 때 호출
  const onFileChange = (event) => {
    // 이때 중요한 점) 파일의 위치는
    // event.target.files 에 위치
    console.log(event.target.files);

    // event 안의 target 안으로 이동해서 files을 가져오라는 뜻
    // 즉 event.target.files과 동일 ES6 문법
    const {
      target: { files },
    } = event;

    const theFile = files[0];
    // FileReader API 사용
    // 비동기 데이터 읽기를 위해 읽을 파일을 가르키는 FILE 객체를 만든 후
    // 그 객체를 통해 파일 내용을 읽어 사용자의 컴퓨터로 저장

    const reader = new FileReader();

    // 파일을 읽고 FileReader 이라는 객체를 생성

    // 파일을 읽기 위해아래 onloadend 이벤트 실행 그후 이벤트가 끝났을 때
    // finishedEvent 에는 객체에는 이미지 파일을 읽어서 텍스트 형태로 저장
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;
      // finishedEvent의 결과를 setAttachment로 설정
      setAttachment(result);
    };
    // reader.readAsDataURL(theFile)
    reader.readAsDataURL(theFile);
  };
  const onClear = () => setAttachment("");
  return (
    <BookCover>
      <BookDot>
        <Page>
          <Home>
            <HomeMain>
              <Profile>
                <Profile1>
                  <ProfileImage src={img4} />
                </Profile1>
                <Profile2>
                  프로필 작성 공간
                  <br />
                  <br />
                  프로필을 설명할 수 있는 공간입니다.
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
                        href="https://github.com/cheonseunghyeon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href="https://kyr5191.tistory.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tistory
                      </a>
                    </DropdownContent>
                  </ProfileDropdown>
                </Profile3>
              </Profile>

              <HomeContents>
                <UpdatedNewsTitle2>
                  <strong>{userObj.displayName}의 미니 홈페이지</strong>
                </UpdatedNewsTitle2>
                <UpdatedNewsTitle>
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
                  <strong>Miniroom</strong>
                </MiniroomTitle>
                <div>
                  <MiniroomGif src={img4} />
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

export default Visitor;
