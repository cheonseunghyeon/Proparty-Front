import { css, Global } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import "https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css";

        @font-face {
          font-family: "Happy";
          src: url("/font/Happiness-Sans-Title.ttf") format("truetype");
          font-display: swap;
        }

        @font-face {
          font-family: "Roboto";
          src: url("/font/RobotoSlab-Bold.ttf") format("truetype");
          font-display: swap;
        }

        @font-face {
          font-family: "PT";
          src: url("/font/PTSerif-Italic.ttf") format("truetype");
          font-display: swap;
        }

        @font-face {
          font-family: "Pix";
          src: url("/font/DungGeunMo.ttf") format("truetype");
          font-display: swap;
        }

        @font-face {
          font-family: "Snow";
          src: url("/font/Yeongdeok.ttf") format("truetype");
          font-display: swap;
        }

        @font-face {
          font-family: "JAM";
          src: url("/font/Jamsil.ttf") format("truetype");
          font-display: swap;
        }

        * {
          font-family: "PT", Arial, sans-serif; /* 기본 폰트 추가 */
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          font-size: 100%;
        }

        @media (min-width: 1200px) {
          html {
            font-size: 90%;
          }
        }

        @media (min-width: 769px) and (max-width: 1199px) {
          html {
            font-size: 85%;
          }
        }

        @media (max-width: 768px) {
          html {
            font-size: 80%;
          }
        }

        a {
          text-decoration: none;
          color: inherit;
        }
        input {
          all: unset;
          appearance: none;
          box-sizing: border-box;
        }

        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100vh;
          overflow-x: hidden;
        }

        body {
          background-color: #f4f4f4;
        }
      `}
    />
  );
};
