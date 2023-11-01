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
  ProjectTeams,
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

const Com = () => {
  const [selectedItem, setSelectedItem] = useState("전체");
  const [selectedSearch, setSelectedSearch] = useState("최신순");
  const [selectedItems, setSelectedItems] = useState("지식 공유 포럼");
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
                to={"/Write"}
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
              <ProjectTeams
                title={"커뮤니티 꿀팁"}
                body={"테스트 중입니다"}
                id={"kyr1234"}
              />
              <ProjectTeams
                title={
                  "오늘도 빛나는 하루를 마치는 그 날의 봄바람이 불어옵니다"
                }
                body={"테스트 중입니다"}
                id={"kyr1234"}
              />
              <ProjectTeams
                title={"커뮤니티 꿀팁"}
                body={"테스트 중입니다"}
                id={"kyr1234"}
              />
              <ProjectTeams
                title={"커뮤니티 꿀팁"}
                body={"테스트 중입니다"}
                id={"kyr1234"}
              />
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
