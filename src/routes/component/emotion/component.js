/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent, useState } from "react";
import Modal from "react-modal";
export const Container = ({ children }) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5.6rem;
      margin-top: 12rem;
    `}
  >
    {children}
  </div>
);

export const Container2 = ({ children }) => (
  <div
    css={css`
      width: 100%;
      padding-top: 10rem;
      padding-bottom: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      background-color: white;
    `}
  >
    {children}
  </div>
);
export const Container3 = ({ children }) => (
  <div
    css={css`
      width: 100%;
      padding-bottom: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
    `}
  >
    {children}
  </div>
);
export const Logo = () => (
  <img
    src="/img/logo.PNG"
    alt="검색"
    css={css`
      width: 10rem;
      margin: 5px;
    `}
  />
);

export const Search = ({ children }) => (
  <div
    css={css`
      width: 10rem;
      height: 2rem;
      border-radius: 2.8rem;
      border: 1px solid black;
    `}
  >
    {children}
  </div>
);

export const Project = ({ title, description, imageSrc }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      css={css`
        width: 24rem;
        display: flex;
        flex-direction: column;
        background-color: #f5f6fa;
        border-radius: 1.2rem;
        overflow: hidden;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
        transition: transform 0.2s, box-shadow 0.2s; /* 변환 및 그림자 효과에 트랜지션 추가 */
        transform: ${hovered ? "scale(1.05)" : "scale(1)"};
        &:hover {
          box-shadow: 0 12px 16px rgba(0, 0, 0, 0.6); /* 호버 시 그림자 효과 강화 */
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt={title}
        css={css`
          width: 24rem;
          height: 15.5rem;
          padding: 1rem;
          border-radius: 10px;
        `}
      />
      <div
        css={css`
          padding: 0.8rem;
          font-size: 1.6rem;
          color: #282c34;
          gap: 0.8rem;
          font-family: "Snow";
          font-style: normal;
          border-radius: 1.2rem;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          padding: 0.8rem;
          font-size: 1.2rem;
          color: gray;
          font-family: "JAM";
          font-style: normal;
          font-weight: 700;
          border-radius: 1.2rem;
          line-height: 1.5;
        `}
      >
        {description}
        <div
          css={css`
            margin-top: 1.2rem;
            color: #377dff;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.4rem;
          `}
        >
          자세히 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
            css={css`
              color: #377dff;
            `}
          >
            <path
              fill-rule="evenodd"
              d="M10.354 4.354a.5.5 0 0 0-.708-.708L5.707 7.293a1 1 0 0 0 0 1.414L9.646 11.95a.5.5 0 0 0 .708-.708L6.707 8l3.647-3.646a.5.5 0 0 0 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export const InputSelectContainer = ({ placeholder, buttonholder }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <input
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0.8rem;
        background-color:#CCE1FF;
        width: 50.6rem;
        border-radius: 20px; 
        font-family: Inter;
        border: double 0px black;
        ::placeholder { /* 이 부분을 추가하여 placeholder 스타일을 지정합니다 */
        color: #aaa;
      `}
      placeholder={placeholder}
    />
  </div>
);
export const InputSelectContainer2 = ({ placeholder, buttonholder }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <textarea
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0.8rem;
        background-color: #cce1ff;
        width: 50.6rem;
        height: 10rem;
        border-radius: 20px;
        font-family: Inter;
        border: double 0px black;
        ::placeholder { /* 이 부분을 추가하여 placeholder 스타일을 지정합니다 */
        font-size: 1.1rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        color: #aaa;
      `}
      placeholder={placeholder}
    ></textarea>
  </div>
);
export const InputContainer = ({ placeholder }) => (
  <input
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #cfcfcf;
      width: 29.6rem;
      border-radius: 20px;
      font-family: Inter;
      border: double 0px black;
      font-size: 1.2rem;
      color: gray;
      font-family: "JAM";
      font-style: normal;
      font-weight: 700;
      border-radius: 1.2rem;
      line-height: 1.5;
    `}
    placeholder={placeholder}
  ></input>
);
export const BodyContainer = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.2rem;
      font-family: Inter;
      color: #afafaf;
      border-radius: 0 0 25px 25px;
      font-size: 1.2rem;
      color: gray;
      font-family: "JAM";
      font-style: normal;
      font-weight: 700;
      border-radius: 1.2rem;
      line-height: 1.5;
    `}
  >
    {children}
  </div>
);
export const MyModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-top: 5rem;
        transition: transform 0.3s ease; /* 애니메이션 트랜지션 추가 */
        transform: translateY(${isOpen ? "0" : "100rem"});
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 60.4rem;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            padding: 3.2rem 3.2rem 1rem 3.2rem;
            width: 80rem;
            background-color: #f5f6fa;
            font-family: Inter;
            border-radius: 0 0 25px 25px;
            font-size: 1.2rem;
            color: gray;
            font-family: "JAM";
            font-style: normal;
            font-weight: 700;
            border-radius: 1.2rem;
            line-height: 1.5;
          `}
        >
          <div
            css={css`
              margin-left: 18rem;
              font-size: 2rem;
              margin-bottom: 1rem;
            `}
          >
            프로젝트 소개 카드 작성
          </div>
          <div
            css={css`
              margin-left: 2.2rem;
            `}
          >
            프로젝트 제목
          </div>
          <BodyContainer>
            <InputSelectContainer placeholder="XYZ Project" buttonholder="" />
          </BodyContainer>
          <div
            css={css`
              margin-top: 1rem;
              margin-left: 2.2rem;
            `}
          >
            제작 기간
          </div>
          <BodyContainer>
            <InputSelectContainer
              placeholder="2023-03-12 ~ 2023-10-11"
              buttonholder=""
            />
          </BodyContainer>
          <div
            css={css`
              margin-top: 1rem;
              margin-left: 2.2rem;
            `}
          >
            제작 인원
          </div>
          <BodyContainer>
            <InputSelectContainer
              placeholder="프론트 3, 벡엔드 3"
              buttonholder=""
            />
          </BodyContainer>
          <div
            css={css`
              margin-top: 1rem;
              margin-left: 2.2rem;
            `}
          >
            목표 및 제작 목적
          </div>
          <BodyContainer>
            <InputSelectContainer2
              placeholder="다양한 사람들과 매칭되는 사이트"
              buttonholder=""
            />
          </BodyContainer>
          <button
            onClick={closeModal}
            css={css`
              margin-top: 1rem;
              background-color: #b9e2fa;
              border: 0px;
              padding: 10px;
              width: 30rem;
              border-radius: 0 0 25px 25px;
              font-size: 1.2rem;
              color: #333;
              margin-left: 11rem;
              font-family: "JAM";
              font-style: normal;
              font-weight: 700;
              border-radius: 1.2rem;
              line-height: 1.5;
            `}
          >
            프로젝트 소개 카드 제작
          </button>
        </div>
      </div>
    </Modal>
  );
};
