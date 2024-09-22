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
