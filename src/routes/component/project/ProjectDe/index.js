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
} from "./component";
import { Charts } from "../main/component";
import { Link, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { Buttons2 } from "../publish/component";
import projectsData from "../../../data/projectsData.json";
import axios from "axios";
import { SearchButton } from "../projects/component";

const Mains2 = () => {
  const { no } = useParams(); // `no` 파라미터를 가져옴
  const selectedTeamMember = projectsData.find(
    (member) => member.no === parseInt(no)
  );

  const [selectedItems, setSelectedItems] = useState("팀 프로젝트");

  const handleItemsClick = (item) => {
    setSelectedItems(item);
  };
  const handleDelete = () => {
    const apiUrl = `http://localhost:8000/api/delete_postteam/${no}`;
    axios
      .delete(apiUrl)
      .then((response) => {
        // DELETE 요청이 성공하면 원하는 작업 수행 (예: 페이지 새로고침)
        console.log("Post deleted:", response.data);
        // 원하는 작업 수행, 예: 페이지 리로드
        window.location.reload();
      })
      .catch((error) => {
        // DELETE 요청 실패 시 에러 핸들링
        console.error("Error deleting post:", error);
      });
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
          <Link to={"/Project"}></Link>
          <button
            css={css`
              padding: 0.8rem;
              border-radius: 0.4rem;
              border: 1px solid lightgray;
              display: flex;
              justify-content: center;
              color: white;
              background-color: #1f1f1f;
              font-size: 1.2rem;
              font-weight: 900;
            `}
            onClick={handleDelete}
          >
            삭제하기
          </button>
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
              dangerouslySetInnerHTML={{ __html: selectedTeamMember.test }}
            ></div>
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
export default Mains2;
