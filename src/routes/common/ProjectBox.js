/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const container = css`
  background-color: #c9c9c9;
  width: 25vw;
  height: 20em;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const title = css`
  background-color: #d9d9d9;
  text-align: center;
  width: 100%;
  height: 45px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 16px;
  line-height: 45px;
`;

const content = css`
  height: 100%;
  width: 100%;
  background-color: #c9c9c9;
  display: inline-block;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  color: rgb(43, 43, 43, 0.5);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const image = css`
  height: 100%;
  width: 100%;
  text-align: center;
  object-fit: cover;
`;

export default function ProjectBox() {
  return (
    <div css={container}>
      <div css={title}>새내기 미션북</div>
      <div css={content}>
        썸네일
        {/* <img src="" css={image} alt="썸네일" /> */}
      </div>
    </div>
  );
}
