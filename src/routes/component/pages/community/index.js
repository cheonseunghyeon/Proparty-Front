/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  ContainerLeftComponent,
  ContainerMember,
  ContainerMidComponent,
  ContainerRightComponent,
  LeftComponent,
  ProjectTeam,
  RowContainer,
  RowSubText,
  RowTestText,
  SearchButton,
  SearchContainer,
  SubText,
} from "./component";
import { Container3 } from "routes/component/emotion/component";
import { Charts } from "../main/component";
import { Link } from "react-router-dom";
import comData from "../../../data/com.json";
import { Inner } from "styles/common/CommonStyles";
const Com = () => {
  const [selectedSearch, setSelectedSearch] = useState("최신순");
  const [selectedItems, setSelectedItems] = useState("지식 공유 포럼");
  const [com, setCom] = useState([]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 JSON 파일에서 데이터를 불러옵니다
    setCom(comData);
  }, []);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    // GET 요청을 보내기 위한 함수
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/community/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
          console.log(data); // API 응답 데이터 처리
        } else {
          console.error("API 요청 실패:", response.statusText);
        }
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };

    // 컴포넌트가 처음 렌더링될 때 한 번 실행
    fetchData();
  }, []);
  const handleItemsClick = (item) => {
    setSelectedItems(item);
  };
  const handleItemSearch = (item) => {
    setSelectedSearch(item);
  };

  return (
    <Inner>
      <ContainerMember>
        <ContainerLeftComponent>
          함께 성장해요
          <LeftComponent>
            <div
              onClick={() => handleItemsClick("팀 프로젝트")}
              style={{
                paddingBottom: "2rem",
                borderBottom: "1px solid lightgray",
                color: selectedItems === "팀 프로젝트" ? "#000" : "lightgray",
                fontSize: selectedItems === "팀 프로젝트" ? "1.6rem" : "1.4rem",
              }}
            >
              <Link
                to={"/Project"}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                팀 프로젝트
              </Link>
            </div>
            <div
              onClick={() => handleItemsClick("팀원")}
              style={{
                paddingBottom: "2rem",
                borderBottom: "1px solid lightgray",
                color: selectedItems === "팀원" ? "#000" : "lightgray",
                fontSize: selectedItems === "팀원" ? "1.6rem" : "1.4rem",
              }}
            >
              <Link
                to={"/Team"}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                팀원
              </Link>
            </div>
            <div
              onClick={() => handleItemsClick("지식 공유 포럼")}
              style={{
                paddingBottom: "2rem",
                borderBottom: "1px solid lightgray",
                color:
                  selectedItems === "지식 공유 포럼" ? "#000" : "lightgray",
                fontSize:
                  selectedItems === "지식 공유 포럼" ? "1.5rem" : "1.4rem",
              }}
            >
              <Link
                to={"/Com"}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                지식 공유 포럼
              </Link>
            </div>
          </LeftComponent>
        </ContainerLeftComponent>
        <ContainerMidComponent>
          <RowContainer>
            <SearchContainer />
            <ButtonContainer>검색</ButtonContainer>
          </RowContainer>
          <RowTestText>
            <RowSubText>
              <SubText
                onClick={() => handleItemSearch("최신순")}
                style={{
                  color: selectedSearch === "최신순" ? "black" : "lightgray",
                }}
              >
                최신순
              </SubText>
              <SubText
                onClick={() => handleItemSearch("정확도순")}
                style={{
                  color: selectedSearch === "정확도순" ? "black" : "lightgray",
                }}
              >
                정확도순
              </SubText>
              <SubText
                onClick={() => handleItemSearch("좋아요순")}
                style={{
                  color: selectedSearch === "좋아요순" ? "black" : "lightgray",
                }}
              >
                좋아요순
              </SubText>
            </RowSubText>
            <SearchButton>
              <Link
                to={"/ComWrite"}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                글쓰기
              </Link>
            </SearchButton>
          </RowTestText>
          <Container3>
            <div
              css={css`
                width: 100%;
                margin-top: 2rem;
                padding: 0.5rem;
                display: flex;
                flex-direction: column;
                background-color: white;
                gap: 2rem;
              `}
            >
              {apiData.map((com, index) => (
                <Link
                  to={`/Com/${com.no}`}
                  key={com.no}
                  style={{ textDecorationLine: "none", color: "black" }}
                >
                  <ProjectTeam
                    key={index}
                    title={com.title}
                    body={com.body}
                    id={com.nickname}
                    stack={com.stack}
                  />
                </Link>
              ))}
            </div>
          </Container3>
        </ContainerMidComponent>
        <ContainerRightComponent>
          <Charts />
        </ContainerRightComponent>
      </ContainerMember>
    </Inner>
  );
};
export default Com;
