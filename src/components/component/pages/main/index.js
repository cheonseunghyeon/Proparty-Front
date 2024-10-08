/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import {
  ContainerLeftComponent,
  ContainerMember,
  ContainerMidComponent,
  ContainerRightComponent,
  LeftComponent,
  MainText,
  RowText,
} from "./component";
import { Inner } from "styles/common/CommonStyles";
import { Container2, Container3 } from "components/component/emotion/component";
import { Charts } from "./component";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Buttons2, TextInputBox4, TextInputBox5 } from "../publish/component";

const Write = () => {
  const [selectedItem, setSelectedItem] = useState("전체");
  const [selectedSearch, setSelectedSearch] = useState("최신순");
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
  const handleItemSearch = (item) => {
    setSelectedSearch(item);
  };
  const [selectedOption, setSelectedOption] = useState("option1"); // 초기 선택 옵션

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
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
              팀 프로젝트
            </MainText>

            <MainText
              onClick={() => handleItemClick("모집중")}
              style={{
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
              <TextInputBox4 />
              <TextInputBox5 />
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
            <Buttons2>프로젝트 발행</Buttons2>
          </Container3>
        </ContainerMidComponent>
        <ContainerRightComponent>
          <Charts />
        </ContainerRightComponent>
      </ContainerMember>
    </Inner>
  );
};
export default React.memo(Write);
