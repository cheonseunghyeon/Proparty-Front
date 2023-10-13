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
import {
  Buttons,
  Buttons2,
  TextInputBox3,
  TextInputBox4,
  TextInputBox5,
} from "../publish/component";

const Mains = () => {
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
        <ContainerLeftComponent></ContainerLeftComponent>
        <ContainerMidComponent>
          <div
            css={css`
              width: 100%;
              margin-top: 2rem;
              padding: 0.5rem;
              display: flex;
              flex-direction: column;
              background-color: white;
              gap: 2rem;
              background-color: lightgray;
              border-radius: 10px;
              padding: 50px;
            `}
          >
            {" "}
            <div
              css={css`
                width: 100%;
                margin-top: 2rem;
                padding: 0.5rem;
                display: flex;
                flex-direction: column;
                background-color: white;
                border-radius: 20px;
                gap: 2rem;
                padding: 50px;
              `}
            >
              {" "}
              <div
                css={css`
                  font-size: 2rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 700;
                  border-radius: 1.2rem;
                  line-height: 1.5;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 0.8rem;
                `}
              >
                소울라이크 게임을 만들어보실분들을 구합니다.
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 300;
                  gap: 1rem;
                `}
              >
                퇴사 기념으로 게임한번 만들어 볼까 합니다.
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 300;
                  gap: 1rem;
                  padding-bottom: 2rem;
                  border-bottom: 1px solid black;
                `}
              >
                기본적으로 3D, 장르는 소울라이크 사용하려는 엔진은 언리얼엔진5
                입니다.
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 300;
                  gap: 1rem;
                `}
              >
                모델러,
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 300;
                  gap: 1rem;
                `}
              >
                애니메이터,
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 300;
                  gap: 1rem;
                  padding-bottom: 2rem;
                  border-bottom: 1px solid black;
                `}
              >
                프로그래머를 모집하고 있습니다.
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 300;
                  gap: 1rem;
                `}
              >
                작성중인 기획안이 궁금하시면
              </div>
              <div
                css={css`
                  font-size: 1.4rem;
                  color: black;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 300;
                  gap: 1rem;
                `}
              >
                연락주시길 바랍니다.
              </div>
            </div>
            <div
              css={css`
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              <Buttons2>연락하기</Buttons2>
            </div>
          </div>
        </ContainerMidComponent>
        <ContainerRightComponent>
          <Charts />
        </ContainerRightComponent>
      </ContainerMember>
    </Inner>
  );
};
export default Mains;
