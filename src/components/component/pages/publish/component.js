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
      gap: 9.6rem;
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
export const ContainerComponent = ({ children }) => {
  return (
    <div
      css={css`
        width: 110rem;
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
    <label
      css={css`
        width: 100rem;
        height: 48rem;
        margin-right: 100px;
        background-color: #ffffff;
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
    >
      <>
        <img src="/img/upload.png" alt="업로드 이미지" />
        <p>
          클릭하여 업로드 하거나 <br />
          이미지를 드래그 앤 드롭하세요.
        </p>
      </>
    </label>
  );
};

export const TextInputBox = () => {
  return (
    <input
      css={css`
        background: none;
        color: #fff;
        &::placeholder {
          color: #fff;
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
export const TextInputBox4 = ({ value, onChange }) => {
  // Destructure the props object
  return (
    <input
      css={css`
        background: none;
        color: #000;
        &::placeholder {
          font-size: 1.8rem;
          color: gray;
        }
      `}
      value={value}
      onChange={onChange}
      placeholder="제목을 입력하세요"
    />
  );
};

export const TextInputBox5 = ({ value, onChange }) => {
  // Destructure the props object
  return (
    <input
      css={css`
        background: none;
        color: #000;
        &::placeholder {
          font-size: 1.4rem;
          color: gray;
        }
      `}
      value={value}
      onChange={onChange}
      placeholder="프로젝트를 소개하는 핵심 내용을 요약해주세요"
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

export const Buttons2 = ({ onClick, children }) => {
  return (
    <button
      css={css`
        width: 30rem;
        height: 5.6rem;
        background-color: #377dff;
        margin-top: 4rem;
        border-radius: 2.8rem;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        cursor: pointer;
        font-family: "JAM";
        font-style: normal;
        border-radius: 1.2rem;
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
