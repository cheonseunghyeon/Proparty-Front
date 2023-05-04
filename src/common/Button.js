/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button({ color, backColor, text }) {
  return (
    <div>
      <button
        css={css`
          width: 5em;
          height: 2.5em;
          color: ${color};
          background-color: ${backColor};
          font-family: roboto;
          font-style: normal;
          font-weight: 700;
          font-size: 1.25em;
          line-height: 28px;
          text-align: center;
        `}
      >
        {text}
      </button>
    </div>
  );
}
