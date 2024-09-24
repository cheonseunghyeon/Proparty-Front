/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import {
  ContainerLeftComponent,
  ContainerMember,
  ContainerMidComponent,
  ContainerRightComponent,
  Inner,
  LeftComponent,
  MainText,
  RowText,
} from "./component";
import { Container2, Container3 } from "components/component/emotion/component";
import { Charts } from "../../main/component";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Buttons2,
  TextInputBox4,
  TextInputBox5,
} from "../../publish/component";
import comData from "../../../../data/com.json";
import axios from "axios";
const Write3 = () => {
  const [selectedItem, setSelectedItem] = useState("지식 공유 포럼");
  const [selectedItems, setSelectedItems] = useState("지식 공유 포럼");
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
    const newProject = {
      no: comData.length + 1,
      title: title,
      body: body,
      stack: "커뮤니티",
      id: "kyr1234",
      test: text,
    };
    const apiUrl = "http://localhost:8000/api/community/create/";
    axios
      .post(apiUrl, newProject)
      .then((response) => {
        // POST 요청이 성공하면 원하는 작업 수행
        console.log("Post created:", response.data);
      })
      .catch((error) => {
        // POST 요청 실패 시 에러 핸들링
        console.error("Error creating post:", error);
      });
    comData.push(newProject);
    console.log(comData);
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
            <Link
              to={"/Write"}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MainText
                onClick={() => handleItemClick("팀 프로젝트")}
                style={{
                  cursor: "pointer",
                  borderBottom:
                    selectedItem === "팀 프로젝트" ? "3px solid black" : "none",
                  color: selectedItem === "팀 프로젝트" ? "black" : "lightgray",
                }}
              >
                팀 프로젝트
              </MainText>
            </Link>
            <Link
              to={"/TeamWrite"}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MainText
                onClick={() => handleItemClick("팀원")}
                style={{
                  cursor: "pointer",
                  borderBottom:
                    selectedItem === "팀원" ? "3px solid black" : "none",
                  color: selectedItem === "팀원" ? "black" : "lightgray",
                }}
              >
                팀원
              </MainText>
            </Link>
            <Link
              to={"/ComWrite"}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <MainText
                onClick={() => handleItemClick("지식 공유 포럼")}
                style={{
                  cursor: "pointer",
                  borderBottom:
                    selectedItem === "지식 공유 포럼"
                      ? "3px solid black"
                      : "none",
                  color:
                    selectedItem === "지식 공유 포럼" ? "black" : "lightgray",
                }}
              >
                지식 공유 포럼
              </MainText>
            </Link>
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
              <ReactQuill
                value={text}
                onChange={handleChange}
                style={{ height: "500px", width: "100%" }}
              />
            </div>
            <Link
              to={"/Team"}
              style={{
                textDecorationLine: "none",
                color: "black",
              }}
            >
              <Buttons2 onClick={handlePublish}>팀원 발행</Buttons2>
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
export default Write3;
