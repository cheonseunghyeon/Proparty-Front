/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent } from "react";
import styled from "@emotion/styled";

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

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
