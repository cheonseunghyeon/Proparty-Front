import { css, Global } from "@emotion/react";

export const GlobalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: "Happy";
        src: url("/font/Happiness-Sans-Title.ttf") format("truetype");
      }

      @font-face {
        font-family: "Roboto";
        src: url("/font/RobotoSlab-Bold.ttf") format("truetype");
      }

      @font-face {
        font-family: "PT";
        src: url("/font/PTSerif-Italic.ttf") format("truetype");
      }

      @font-face {
        font-family: "Pix";
        src: url("/font/DungGeunMo.ttf") format("truetype");
      }

      @font-face {
        font-family: "Snow";
        src: url("/font/Yeongdeok.ttf") format("truetype");
      }

      @font-face {
        font-family: "JAM";
        src: url("/font/Jamsil.ttf") format("truetype");
      }

      * {
        font-family: "PT";
        box-sizing: border-box;
      }

      html {
        font-size: 100%;
      }

      @media (min-width: 1200px) {
        html {
          font-size: 90%;
        }
      }

      @media (max-width: 768px) {
        html {
          font-size: 110%;
        }
      }

      html,
      body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
      }
    `}
  />
);
