/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Form, Link } from "react-router-dom";
import { dbService, storageService } from "fbase";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import {
  Chart,
  Chart2,
  Main1,
  Rowdiv,
  Title2,
  Title3,
} from "./component/pages/main/component";
import { Container, Container2, Project } from "./component/emotion/component";
import useUserStore from "store/store";

const Home = () => {
  const { userObj } = useUserStore();
  const [nweets, setNweets] = useState([]); // DB에서 가져온 트윗들 저장

  // Firestore에서 데이터를 가져오는 useEffect
  useEffect(() => {
    // 'createdAt' 기준으로 내림차순 정렬
    const q = query(
      collection(dbService, "DBTable"),
      orderBy("createdAt", "desc")
    );
    // DB에 변경 사항이 있을 때마다 실행
    onSnapshot(q, (snapshot) => {
      const DBArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNweets(DBArray); // 가져온 트윗들을 상태에 저장
    });
  }, []);

  const [apiData, setApiData] = useState([]); // API 데이터 상태 관리

  // API에서 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/Project/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setApiData(data); // API 데이터 저장
        } else {
          console.error("API 요청 실패:", response.statusText);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    fetchData(); // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
  }, []);

  return (
    <Container>
      <Link to="/Write">
        <Main1 />
      </Link>

      <Rowdiv>
        <Chart />
        <Chart2 />
      </Rowdiv>

      <Link to="/TeamCard">
        <Title2>
          팀원 소개 더 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
              fill="#377DFF"
            />
          </svg>
        </Title2>
      </Link>

      <Container2>
        <Title3>주목할 만한 인기 프로젝트</Title3>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5rem;
            margin: 2rem;
          `}
        >
          {apiData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <Link to="/ProCard">
          <Title2>
            프로젝트 더 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143Z"
                fill="#377DFF"
              />
            </svg>
          </Title2>
        </Link>
      </Container2>
    </Container>
  );
};

export default React.memo(Home);
