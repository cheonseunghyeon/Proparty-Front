/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import "../css/Home.css";
import "../css/Layout.css";
import { Form, Link } from "react-router-dom";
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
import img from "./char.png";
import img2 from "./back3.jpg";
import img3 from "./profile.png";
import {
  Chart,
  Chart2,
  Main1,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Rowdiv,
  Title2,
} from "./component/main/component";
import { Container, Container2 } from "./component/emotion/component";
// 자동으로 임폴트 됨
// crud 구현

const Home = ({ userObj }) => {
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

  // // input type="file" 이 변할 때 호출
  // const onFileChange = (event) => {
  //   // 이때 중요한 점) 파일의 위치는
  //   // event.target.files 에 위치
  //   console.log(event.target.files);

  //   // event 안의 target 안으로 이동해서 files을 가져오라는 뜻
  //   // 즉 event.target.files과 동일 ES6 문법
  //     const {
  //       target: { files },
  //     } = event;

  //     const theFile = files[0];
  //     // FileReader API 사용
  //     // 비동기 데이터 읽기를 위해 읽을 파일을 가르키는 FILE 객체를 만든 후
  //     // 그 객체를 통해 파일 내용을 읽어 사용자의 컴퓨터로 저장

  //     const reader = new FileReader();

  //     // 파일을 읽고 FileReader 이라는 객체를 생성

  //     // 파일을 읽기 위해아래 onloadend 이벤트 실행 그후 이벤트가 끝났을 때
  //     // finishedEvent 에는 객체에는 이미지 파일을 읽어서 텍스트 형태로 저장
  //     reader.onloadend = (finishedEvent) => {
  //       console.log(finishedEvent);
  //       const {
  //         currentTarget: {result},
  //       } = finishedEvent;
  //       // finishedEvent의 결과를 setAttachment로 설정
  //       setAttachment(result);
  //     };
  //     // reader.readAsDataURL(theFile)
  //     reader.readAsDataURL(theFile);
  //   };
  //   const onClear = () => setAttachment("");
  return (
    <Container>
      <Main1 />

      <Rowdiv>
        <Chart />
        <Chart2 />
      </Rowdiv>
      <Title2>
        {" "}
        팀원 소개 더 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
            fill="#377DFF"
          />
        </svg>
      </Title2>
      <Container2>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 5.6rem;
            padding-left: 18rem;
          `}
        >
          <Project1 />
          <Project2 />
          <Project3 />
          <Project4 />
          <Project5 />
          <Project6 />
        </div>
        <Title2>
          {" "}
          프로젝트 더 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
              fill="#377DFF"
            />
          </svg>
        </Title2>
      </Container2>

      <div class="bookcover">
        <div class="bookdot">
          <div class="page">
            <div class="home">
              <div class="home_main">
                <div class="profile">
                  <div class="profile_1">
                    <img class="profile_image" src={img} />
                  </div>
                  <div class="profile_2">
                    {" "}
                    천승현 님의 프로필
                    <br />
                    <br />
                    프로필을 설명할 수 있는 공간 입니다.
                  </div>
                  <div class="profile_3">
                    * 주소 등을 기록하는 공간
                    <div class="profile-dropdown">
                      <div class="dropdown-btn">
                        <div class="dropdown-title">Github</div>
                        <div class="triangle-down"></div>
                      </div>
                      <div class="dropdown-content">
                        <a
                          href="https://programming-oddments.tistory.com/"
                          target="_blank"
                        >
                          Devlog
                        </a>
                        <a href="https://github.com/joseph-106" target="_blank">
                          Github
                        </a>
                        <a
                          href="https://www.instagram.com/ksj_106/"
                          target="_blank"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="home_contents">
                  <div class="updated_news_title2">
                    <br />
                    <strong>{userObj.displayName}의 미니 홈페이지</strong>
                  </div>
                  <div class="updated_news_title">
                    <br />
                    <strong>Updated news</strong>
                  </div>
                  <div class="updated_news_contents">
                    <div class="updated_news_left">
                      <span class="updated_news_left1">
                        <span class="updated_news_red">&nbsp;Diary&nbsp;</span>
                        2023-05-22
                      </span>
                      <span class="updated_news_left2">
                        <span class="updated_news_blue">&nbsp;photo&nbsp;</span>
                        테스트 용
                      </span>
                      <span class="updated_news_left3">
                        <span class="updated_news_blue">&nbsp;photo&nbsp;</span>
                        테스트 이미지
                      </span>
                      <span class="updated_news_left4">
                        <span class="updated_news_red">&nbsp;Diary&nbsp;</span>
                        2023-05-23
                      </span>
                    </div>
                    <div class="updated_news_right">
                      <div class="updated_news_right1">
                        다이어리{" "}
                        <span class="updated_news_right_number">2/25</span>{" "}
                        &emsp;&emsp;&emsp;&emsp;사진첩{" "}
                        <span class="updated_news_right_number">0/25</span>
                      </div>
                      <div class="updated_news_right2">
                        게시판{" "}
                        <span class="updated_news_right_number">2/25</span>{" "}
                        &emsp;&emsp;&emsp;&emsp;&emsp;방명록{" "}
                        <span class="updated_news_right_number">0/25</span>
                      </div>
                      <div class="updated_news_right3"></div>
                    </div>
                  </div>
                  <div class="miniroom_title">
                    <br />
                    <strong>Miniroom</strong>
                  </div>
                  <div class="miniroom_contents">
                    <img class="miniroom_gif" src={img2} />
                  </div>
                </div>
              </div>
            </div>
            <ul class="menu_bar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/Diary">Diary</Link>
              </li>
              <li>
                <Link to="/">Photo</Link>
              </li>
              <li>
                <Link to="/Visitor">Visitor</Link>
              </li>
              <li>
                <Link to="/Visitor">Chat</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
