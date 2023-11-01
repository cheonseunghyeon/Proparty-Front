/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  ContainerLeftComponent,
  ContainerMember,
  ContainerMidComponent,
  ContainerRightComponent,
  Inner,
  LeftComponent,
  MainText,
  ProjectTeam2,
  ProjectTeam3,
  ProjectTeam4,
  RowContainer,
  RowSubText,
  RowTestText,
  RowText,
  SearchButton,
  SearchContainer,
  SubText,
} from "./component";
import { Container3 } from "routes/component/emotion/component";
import { Charts, Chartss, Chartss2, Title2 } from "../main/component";
import { Link } from "react-router-dom";
import TeamData from "../../../data/TeamData.json";
const Team = () => {
  const [selectedItem, setSelectedItem] = useState("전체");
  const [selectedSearch, setSelectedSearch] = useState("최신순");
  const [selectedItems, setSelectedItems] = useState("팀원");
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam(TeamData);
  }, []);
  const filteredProjects = team.filter((project) => {
    if (selectedItem === "전체") {
      return true; // 전체 선택 시 모든 프로젝트 반환
    } else if (
      selectedItem === "프론트엔드" &&
      project.stack === "프론트엔드"
    ) {
      return true; // 모집중 선택 시 모집중인 프로젝트 반환
    } else if (selectedItem === "벡엔드" && project.stack === "벡엔드") {
      return true; // 모집완료 선택 시 모집완료인 프로젝트 반환
    } else if (selectedItem === "디자인" && project.stack === "디자인") {
      return true; // 모집완료 선택 시 모집완료인 프로젝트 반환
    } else if (selectedItem === "기타" && project.stack === "기타") {
      return true; // 모집완료 선택 시 모집완료인 프로젝트 반환
    } else {
      return false;
    }
  });
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
              onClick={() => handleItemClick("프론트엔드")}
              style={{
                borderBottom:
                  selectedItem === "프론트엔드" ? "3px solid black" : "none",
                color: selectedItem === "프론트엔드" ? "black" : "lightgray",
              }}
            >
              프론트엔드
            </MainText>
            <MainText
              onClick={() => handleItemClick("벡엔드")}
              style={{
                borderBottom:
                  selectedItem === "벡엔드" ? "3px solid black" : "none",
                color: selectedItem === "벡엔드" ? "black" : "lightgray",
              }}
            >
              벡엔드
            </MainText>
            <MainText
              onClick={() => handleItemClick("디자인")}
              style={{
                borderBottom:
                  selectedItem === "디자인" ? "3px solid black" : "none",
                color: selectedItem === "디자인" ? "black" : "lightgray",
              }}
            >
              디자인
            </MainText>
            <MainText
              onClick={() => handleItemClick("기타")}
              style={{
                borderBottom:
                  selectedItem === "기타" ? "3px solid black" : "none",
                color: selectedItem === "기타" ? "black" : "lightgray",
              }}
            >
              기타
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
                to={"/TeamWrite"}
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
              {filteredProjects.map((team, index) => (
                <Link
                  to={`/Team/${team.no}`}
                  key={team.no}
                  style={{ textDecorationLine: "none", color: "black" }}
                >
                  <ProjectTeam2
                    key={team.no}
                    title={team.title}
                    body={team.body}
                    id={team.id}
                    stack={team.stack}
                  />
                </Link>
              ))}
            </div>
            <div
              css={css`
                margin: 3rem;
              `}
            >
              <Title2 style={{ color: "black" }}>팀원 소개 카드</Title2>
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
              <Chartss />
              <Chartss2 />
            </div>
            <div
              css={css`
                margin: 3rem;
              `}
            >
              <Title2>
                팀원 소개 카드 더보기
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
export default Team;
