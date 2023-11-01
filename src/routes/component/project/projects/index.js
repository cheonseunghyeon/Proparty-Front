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
  Charts,
  Project1,
  Project4,
  Project6,
  Title2,
} from "../main/component";
import { Link } from "react-router-dom";
import projectsData from "../../../data/projectsData.json";

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState("전체");
  const [selectedSearch, setSelectedSearch] = useState("최신순");
  const [selectedItems, setSelectedItems] = useState("팀 프로젝트");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 JSON 파일에서 데이터를 불러옵니다
    setProjects(projectsData);
  }, []);
  const filteredProjects = projects.filter((project) => {
    if (selectedItem === "전체") {
      return true; // 전체 선택 시 모든 프로젝트 반환
    } else if (selectedItem === "모집중" && project.stack === "모집중") {
      return true; // 모집중 선택 시 모집중인 프로젝트 반환
    } else if (selectedItem === "모집완료" && project.stack === "모집완료") {
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
              {selectedItem !== "모집중" && (
                <Link
                  to={`/Project/0`}
                  style={{ textDecorationLine: "none", color: "black" }}
                >
                  <ProjectTeam
                    title={"소울라이크 게임을 만들어보실분들을 구합니다."}
                    stack={"모집완료"}
                    body={
                      "기본적으로 3D, 장르는 소울라이크이며 사용하려는 엔진은 언리얼엔진5 입니다."
                    }
                  />
                </Link>
              )}

              {filteredProjects.map((project) => (
                <Link
                  to={`/Project/${project.no}`}
                  key={project.no}
                  style={{ textDecorationLine: "none", color: "black" }}
                >
                  <ProjectTeam
                    key={project.no}
                    title={project.title}
                    body={project.body}
                    id={project.id}
                    stack={project.stack}
                  />
                </Link>
              ))}
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
              <Link to="/ProCard" style={{ textDecorationLine: "none" }}>
                <Title2>
                  프로젝트 소개 카드 보려가기
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
              </Link>
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
