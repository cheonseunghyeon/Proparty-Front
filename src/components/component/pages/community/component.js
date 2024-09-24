/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent } from "react";

export const Inner = ({ children }) => (
  <section
    css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20.6rem;
      padding: 10rem;
      background-color: white;
    `}
  >
    {children}
  </section>
);

export const Header1 = ({ children, style }) => (
  <div
    css={css`
      font-size: 2.4rem;
      color: black;

      font-family: "JAM";
      font-style: normal;
      border-radius: 1.2rem;
      gap: 0.8rem;
    `}
  >
    {children}
  </div>
);
export const ContainerLeftComponent = ({ children }) => {
  return (
    <div
      css={css`
        width: 17%;
        padding: 1rem;
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        border-radius: 10px;
        background-color: white;
        font-size: 1.2rem;
        color: #377dff;
        font-family: "JAM";
      `}
    >
      {children}
    </div>
  );
};
export const ContainerRightComponent = ({ children }) => {
  return (
    <div
      css={css`
        width: 15%;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        font-size: 1.6rem;
        color: #282c34;
        font-family: "JAM";
      `}
    >
      {children}
    </div>
  );
};
export const ContainerMidComponent = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        gap: 1.2rem;
        color: #282c34;
        font-family: "JAM";
      `}
    >
      {children}
    </div>
  );
};
export const ContainerMember = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5rem;
      `}
    >
      {children}
    </div>
  );
};
export const LeftComponent = ({ children }) => {
  return (
    <div
      css={css`
        padding-left: 0.3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-size: 1.6rem;
        color: lightgray;
        font-family: "JAM";
        padding-bottom: 1rem;
      `}
    >
      {children}
    </div>
  );
};
export const RowText = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        gap: 2rem;
        border-bottom: 1px solid black;
      `}
    >
      {children}
    </div>
  );
};
export const RowSubText = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
};
export const RowTestText = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        gap: 2rem;
        justify-content: space-between;
        padding-bottom: 2rem; /* Add padding to move the border down */
        border-bottom: 1px solid lightgray;
      `}
    >
      {children}
    </div>
  );
};
export const RowContainer = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        gap: 2rem;
      `}
    >
      {children}
    </div>
  );
};
export const MainText = ({ children, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      css={css`
        height: 3rem;
        ${style}
      `}
    >
      {children}
    </div>
  );
};
export const SubText = ({ children, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      css={css`
        height: 3rem;
        display: flex;
        align-items: center;
        font-size: 1rem;
        ${style}
      `}
    >
      {children}
    </div>
  );
};
export const SearchContainer = ({ children }) => {
  return (
    <div
      css={css`
        width: 80%;
        padding: 1rem;
        gap: 1rem;
        border-radius: 0.4rem;
        border: 2px solid black;
        background-color: white;
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 512 512"
        fill="none"
      >
        <path
          d="M416 208C416 253.9 401.1 296.3 376 330.7L502.6 457.4C515.1 469.9 515.1 490.2 502.6 502.7C490.1 515.2 469.8 515.2 457.3 502.7L330.7 376C296.3 401.2 253.9 416 208 416C93.1 416 0 322.9 0 208C0 93.1 93.1 0 208 0C322.9 0 416 93.1 416 208ZM208 352C226.91 352 245.636 348.275 263.106 341.039C280.577 333.802 296.452 323.195 309.823 309.823C323.195 296.452 333.802 280.577 341.039 263.106C348.275 245.636 352 226.91 352 208C352 189.09 348.275 170.364 341.039 152.894C333.802 135.423 323.195 119.548 309.823 106.177C296.452 92.805 280.577 82.198 263.106 74.9613C245.636 67.7247 226.91 64 208 64C189.09 64 170.364 67.7247 152.894 74.9613C135.423 82.198 119.548 92.805 106.177 106.177C92.805 119.548 82.198 135.423 74.9613 152.894C67.7247 170.364 64 189.09 64 208C64 226.91 67.7247 245.636 74.9613 263.106C82.198 280.577 92.805 296.452 106.177 309.823C119.548 323.195 135.423 333.802 152.894 341.039C170.364 348.275 189.09 352 208 352Z"
          fill="black"
        />
      </svg>
      <input
        css={css`
          margin-left: 1rem;
          background: none;
          color: #fff;
          font-size: 1.6rem;
          &::placeholder {
            color: lightgray;
            font-size: 1.6rem;
          }
        `}
        placeholder="제목을 입력하세요"
      />
    </div>
  );
};
export const ButtonContainer = ({ children }) => {
  return (
    <div
      css={css`
        width: 20%;
        padding: 1rem;
        gap: 1rem;
        border-radius: 0.4rem;
        background-color: #377dff;
        border: 1px solid lightgray;
        display: flex;
        justify-content: center;
        color: white;
      `}
    >
      {children}
    </div>
  );
};
export const SearchButton = ({ children }) => {
  return (
    <div
      css={css`
        padding: 0.8rem;
        border-radius: 0.4rem;
        border: 1px solid lightgray;
        display: flex;
        justify-content: center;
        color: white;
        background-color: #1f1f1f;
        font-size: 1.2rem;
      `}
    >
      {children}
    </div>
  );
};
export const ProjectTeam = ({ title, body, id, stack }) => {
  const stackColors = {
    모집완료: "#333333", // 프론트엔드 스택 배경색
    모집중: "#377dff", // 벡엔드 스택 배경색
    커뮤니티: "#377dff",
  };

  // 스택에 따른 배경색 선택
  const backgroundColor = stackColors[stack] || "initial";
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-left: 0.5rem;
          font-size: 1.5rem;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 0.6rem;
            font-size: 1rem;
            color: white;
            background-color: ${backgroundColor};
            margin-right: 1rem;
            padding-left: 0.5rem;
          `}
        >
          {stack}
        </div>
        {title}
      </div>
      <div
        css={css`
          font-size: 1rem;
          margin-left: 0.3rem;
          padding-left: 0.5rem;
        `}
      >
        {body}
      </div>
      <div
        css={css`
          font-size: 0.6rem;
          margin-left: 0.3rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid lightgray;
          padding-left: 0.5rem;
        `}
      >
        {id}
      </div>
    </div>
  );
};
export const ProjectTeams = ({ title, body, id }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-left: 0.5rem;
          font-size: 1.5rem;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          font-size: 1rem;
          margin-left: 0.3rem;
          padding-left: 0.5rem;
        `}
      >
        {body}
      </div>
      <div
        css={css`
          font-size: 0.6rem;
          margin-left: 0.3rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid lightgray;
          padding-left: 0.5rem;
        `}
      >
        {id}
      </div>
    </div>
  );
};
