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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Buttons2, TextInputBox4, TextInputBox5 } from "../publish/component";
import projectsData from "../../../data/projectsData.json";
const Write = () => {
  const [selectedItem, setSelectedItem] = useState("전체");
  const [selectedItems, setSelectedItems] = useState("팀 프로젝트");
  const [text, setText] = useState("");

  const handleChange = (value) => {
    setText(value);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleItemsClick = (item) => {
    setSelectedItems(item);
  };
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [title, setTitle] = useState(""); // State for title
  const [body, setBody] = useState(""); // State for body

  // Handler for title input
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Handler for body input
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handlePublish = () => {
    // Create a new project object
    const newProject = {
      no: projectsData.length + 1, // Assign a unique ID
      title: title,
      body: body,
      stack: "모집중", // You can set the initial state as needed
      id: "kyr1234", // You can set the user ID as needed
    };

    projectsData.push(newProject);
    console.log(projectsData);
    // Clear the input fields
    setTitle("");
    setBody("");
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
                cursor: "pointer",
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
                cursor: "pointer",
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
                cursor: "pointer",
                borderBottom:
                  selectedItem === "전체" ? "3px solid black" : "none",
                color: selectedItem === "전체" ? "black" : "lightgray",
              }}
            >
              팀 프로젝트
            </MainText>

            <MainText
              onClick={() => handleItemClick("모집중")}
              style={{
                cursor: "pointer",
                borderBottom:
                  selectedItem === "모집중" ? "3px solid black" : "none",
                color: selectedItem === "모집중" ? "black" : "lightgray",
              }}
            >
              팀원
            </MainText>
            <MainText
              onClick={() => handleItemClick("모집완료")}
              style={{
                cursor: "pointer",
                borderBottom:
                  selectedItem === "모집완료" ? "3px solid black" : "none",
                color: selectedItem === "모집완료" ? "black" : "lightgray",
              }}
            >
              지식 공유 포럼
            </MainText>
          </RowText>

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
              <TextInputBox4
                value={title}
                onChange={handleTitleChange}
                placeholder="프로젝트 제목"
              />
              <TextInputBox5
                value={body}
                onChange={handleBodyChange}
                placeholder="프로젝트 설명"
              />
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="option1">모집 중</option>
                <option value="option2">모집 완료</option>
              </select>
              <ReactQuill
                value={text}
                onChange={handleChange}
                style={{ height: "500px", width: "100%" }}
              />
            </div>
            <Link
              to={"/Project"}
              style={{
                textDecorationLine: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <Buttons2 onClick={handlePublish}>프로젝트 발행</Buttons2>
            </Link>
          </Container3>
        </ContainerMidComponent>
        <ContainerRightComponent>
          <Charts />
        </ContainerRightComponent>
      </ContainerMember>
    </Inner>
  );
};
export default Write;
