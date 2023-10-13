/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import {
  ButtonContainer,
  ContainerLeftComponent,
  ContainerMember,
  ContainerMidComponent,
  ContainerRightComponent,
  Inner,
  LeftComponent,
  MainText,
  ProjectTeam,
  RowContainer,
  RowSubText,
  RowTestText,
  RowText,
  SearchButton,
  SearchContainer,
  SubText,
} from "./component";
import { Container2, Container3 } from "routes/component/emotion/component";
import {
  Chart,
  Charts,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Title2,
} from "../main/component";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState("전체");
  const [selectedSearch, setSelectedSearch] = useState("최신순");
  const [selectedItems, setSelectedItems] = useState("팀 프로젝트");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
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
          <RowText>
            <MainText
              onClick={() => handleItemClick("전체")}
              style={{
                borderBottom:
                  selectedItem === "전체" ? "3px solid black" : "none",
                color: selectedItem === "전체" ? "black" : "lightgray",
              }}
            >
              전체
            </MainText>

            <MainText
              onClick={() => handleItemClick("모집중")}
              style={{
                borderBottom:
                  selectedItem === "모집중" ? "3px solid black" : "none",
                color: selectedItem === "모집중" ? "black" : "lightgray",
              }}
            >
              모집중
            </MainText>
            <MainText
              onClick={() => handleItemClick("모집완료")}
              style={{
                borderBottom:
                  selectedItem === "모집완료" ? "3px solid black" : "none",
                color: selectedItem === "모집완료" ? "black" : "lightgray",
              }}
            >
              모집완료
            </MainText>
          </RowText>
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
                to={"/Publish"}
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
              <ProjectTeam
                title={"[프론트엔드] 🔥 중고거래 & 커뮤니티 크로스 플랫폼 앱"}
                body={
                  "안녕하세요, 현업 종사자부터 대학생까지 다양하게 구성되어있는 [가티] 입니다 :)"
                }
                id={"kyr1234"}
              />
              <ProjectTeam
                title={"소울라이크 게임을 만들어보실분들을 구합니다."}
                body={
                  "기본적으로 3D, 장르는 소울라이크이며 사용하려는 엔진은 언리얼엔진5 입니다."
                }
                id={"kyr1234"}
              />
              <ProjectTeam
                title={"[앱 개발자] 술닥술닥 프로젝트 앱 개발자 모집!"}
                body={
                  "안녕하세요! 술과 관련된 사이드 프로젝트를 진행하고 있는 팀 술닥술닥🍻입니다."
                }
                id={"kyr1234"}
              />
              <ProjectTeam
                title={
                  "[앱/서버 개발자 모집] 🌎 대학생 국제교류 소모임 서비스 WINGLE"
                }
                body={
                  "WINGLE과 함께 글로벌 서비스를 만들어 갈 [개발팀원]을 모집합니다 😊"
                }
                id={"kyr1234"}
              />
              <ProjectTeam
                title={
                  "[사이드 프로젝트] 블라인드 소개팅 웹사이트를, 만드실 디자이너 1분의 연락을 기다립니다!"
                }
                body={
                  "블라인드 소개팅, 문제, 관심사등을 제시하고 그 제시한 답안들이 맞는 유저들끼리 매칭 시켜주는 서비스입니다."
                }
                id={"kyr1234"}
              />
              <ProjectTeam
                title={"[뉴스앱] 사이드 프로젝트 백엔드 개발자님 모집합니다!"}
                body={
                  "프로젝트: ChatGPT를 활용하여 사용자가 더 효율적으로 읽을 수 있도록 돕는 뉴스 앱 프로젝트입니다."
                }
                id={"kyr1234"}
              />
              <ProjectTeam
                title={"[Furry-Friend] 프로젝트 팀원 모집(UI/UX, 모바일)"}
                body={"애완동물 관련 물품을 거래하는 중고 거래 플랫폼"}
                id={"kyr1234"}
              />
              <ProjectTeam
                title={"한국투자증권 Node.js 라이브러리"}
                body={
                  "대한민국에서 최초로 한국투자증권이 REST API 형태로 API를 제공 합니다."
                }
                id={"kyr1234"}
              />
              <ProjectTeam
                title={"Hello new world 해커톤 인원모집"}
                body={"프로젝트 주제 : 해커톤"}
                id={"kyr1234"}
              />
              <ProjectTeam
                title={"위성영상을 활용한 정유탱크·컨테이너 탐지 AI 경진대회"}
                body={
                  "위성영상 기반의 정확도 높은 정유탱크·컨테이너 탐지 AI 모델 개발 및 최적화"
                }
                id={"kyr1234"}
              />
            </div>
            <div
              css={css`
                margin: 3rem;
              `}
            >
              <Title2 style={{ color: "black" }}>프로젝트 소개 카드</Title2>
            </div>

            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                padding: 0.8rem;
                gap: 1.2rem;
              `}
            >
              <Project1
                style={{ width: "20rem", height: "26rem" }}
                img={{ width: "20rem", height: "15rem" }}
              />

              <Project4
                style={{ width: "20rem", height: "26rem" }}
                img={{ width: "20rem", height: "15rem" }}
              />

              <Project6
                style={{ width: "20rem", height: "26rem" }}
                img={{ width: "20rem", height: "15rem" }}
              />
            </div>
            <div
              css={css`
                margin: 3rem;
              `}
            >
              <Title2>
                프로젝트 소개 카드 작성하기
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
export default Projects;
