/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent } from "react";

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
export const Header2 = ({ children, style }) => (
  <div
    css={css`
      font-size: 1.6rem;
      color: black;
      font-family: "Snow";
      border-radius: 1.2rem;
    `}
  >
    {children}
  </div>
);
export const Header3 = ({ children, style }) => (
  <div
    css={css`
      font-size: 2rem;
      color: black;
      font-family: "Snow";
      border-radius: 1.2rem;
      color: #fff;
    `}
  >
    {children}
  </div>
);
export const ContainerComponent = ({ children }) => {
  return (
    <div
      css={css`
        width: 80rem;
        padding: 5.6rem 5.2rem;
        border-radius: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        background-color: gray;
        font-size: 1.6rem;
        color: #282c34;
        font-family: "JAM";
      `}
    >
      {children}
    </div>
  );
};

export const PublishImg = () => {
  return (
    <>
      <img
        src="/img/project1.png"
        alt="업로드 이미지"
        css={css`
          width: 70rem;
          height: 38rem;
          margin-right: 100px;
          border-radius: 1.2rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          gap: 1.6rem;
          color: #282c34;
        `}
      />
    </>
  );
};

export const TextInputBox = () => {
  return (
    <input
      css={css`
        background: none;
        color: #fff;
        font-size: 1.6rem;
        &::placeholder {
          color: #fff;
          font-size: 1.6rem;
        }
      `}
      placeholder="제목을 입력하세요"
    />
  );
};
export const TextInputBox2 = () => {
  return (
    <input
      css={css`
        background: none;
        color: #fff;
        &::placeholder {
          color: #fff;
        }
      `}
      placeholder="소제목을 입력하세요"
    />
  );
};
export const TextInputBox3 = () => {
  return (
    <input
      css={css`
        background: none;
        color: #fff;
        &::placeholder {
          color: #fff;
        }
      `}
      placeholder="내용을 입력하세요"
    />
  );
};
export const InfoInput2 = () => (
  <input
    css={css`
      background-color: transparent;
      width: 24rem;
      &::placeholder {
        color: #cbcbcb;
      }
    `}
  />
);
export const GridBox = ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        gap: 3.2rem;
      `}
    >
      {children}
    </div>
  );
};

export const LinkInputBox2 = () => {
  return (
    <div
      css={css`
        width: 98rem;
        border-radius: 1.2rem;
        border: 1px solid black;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 4rem;
        align-items: center;
        padding: 1.8rem;
        background-color: #ffffff;
      `}
    >
      <input
        type="text"
        placeholder="http 또는 https를 포함하는 전체 링크를 입력해주세요"
      />
    </div>
  );
};

export const Buttons = ({ children }) => {
  return (
    <div
      css={css`
        width: 98rem;
        height: 9.6rem;
        background-color: #377dff;
        margin-bottom: 4rem;
        border-radius: 2.8rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;

        font-family: "JAM";
        font-style: normal;
        border-radius: 1.2rem;
      `}
    >
      {children}
    </div>
  );
};
