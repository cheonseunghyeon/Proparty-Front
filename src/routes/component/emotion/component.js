/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent } from "react";

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
