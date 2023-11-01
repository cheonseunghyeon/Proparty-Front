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
export const ProjectDetailTitle = ({ children }) => {
  return (
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
      {children}
    </div>
  );
};
export const ProjectDetailText = ({ children }) => {
  return (
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
      {children}
    </div>
  );
};
export const ProjectDetailText2 = ({ children }) => {
  return (
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
      {children}
    </div>
  );
};
