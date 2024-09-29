/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import {
  ContainerLeftComponent,
  ContainerMember,
  ContainerMidComponent,
  ContainerRightComponent,
  LeftComponent,
  ProjectDetailText,
  ProjectDetailText2,
  ProjectDetailTitle,
} from "./component";
import { Charts } from "../main/component";
import { Link, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { Buttons2 } from "../publish/component";
import comData from "../../../data/com.json";
import { Inner } from "styles/common/CommonStyles";
const CommunityDetail = () => {
  const { no } = useParams(); // `no` 파라미터를 가져옴
  const selectedTeamMember = comData.find(
    (member) => member.no === parseInt(no)
  );

  const [selectedItems, setSelectedItems] = useState("지식 공유 포럼");

  const handleItemsClick = (item) => {
    setSelectedItems(item);
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
          {selectedTeamMember && (
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                gap: 1rem;
                padding: 1rem;
                border-radius: 10px;
              `}
            >
              <div
                css={css`
                  color: #000;
                  font-size: 2.2rem;
                `}
              >
                [{selectedTeamMember.stack}] {selectedTeamMember.title}
              </div>
              <div
                css={css`
                  color: #000;
                  font-size: 1.6rem;
                `}
              >
                {selectedTeamMember.body}
              </div>
            </div>
          )}
          <div
            css={css`
              width: 100%;
              margin-top: 1rem;
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
              <ProjectDetailTitle>
                소울라이크 게임을 만들어보실분들을 구합니다.
              </ProjectDetailTitle>
              <ProjectDetailText>
                소울라이크 게임을 만들어보실분들을 구합니다.
              </ProjectDetailText>
              <ProjectDetailText>
                퇴사 기념으로 게임한번 만들어 볼까 합니다.
              </ProjectDetailText>
              <ProjectDetailText2>
                기본적으로 3D, 장르는 소울라이크 사용하려는 엔진은 언리얼엔진5
                입니다.
              </ProjectDetailText2>
              <ProjectDetailText>모델러,</ProjectDetailText>
              <ProjectDetailText>애니메이터,</ProjectDetailText>
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
export default React.memo(CommunityDetail);
