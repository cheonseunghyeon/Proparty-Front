import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: "Happy";
        src: url("../font/Happiness-Sans-Title.ttf") format("truetype");
      }

      @font-face {
        font-family: "Roboto";
        src: url("../font/RobotoSlab-Bold.ttf") format("truetype");
      }

      @font-face {
        font-family: "PT";
        src: url("../font/PTSerif-Italic.ttf") format("truetype");
      }

      @font-face {
        font-family: "Pix";
        src: url("../font/DungGeunMo.ttf") format("truetype");
      }

      @font-face {
        font-family: "Snow";
        src: url("../font/Yeongdeok.ttf") format("truetype");
      }

      @font-face {
        font-family: "JAM";
        src: url("../font/Jamsil.ttf") format("truetype");
      }

      * {
        font-family: "PT";
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
    `}
  />
);

export const BackColor = styled.div`
  background-color: white;
  background-repeat: no-repeat;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BackSet = styled.div`
  display: inline-flex;
  width: 90%;
  max-width: 34.375rem;
  padding: 3rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  filter: brightness(100%);
  text-align: center;
  border: #fff solid 0.0625rem;
  background-color: aliceblue;
  border-radius: 0.625rem;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #0077be;
  font-family: "Roboto";
`;

export const IntArea = styled.div`
  width: 100%;
  max-width: 25rem;
`;

export const Input = styled.input`
  width: 95%;
  padding: 1.25rem 0.625rem 0.625rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.0625rem solid #999;
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.8);
  outline: none;
`;

export const BtnArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.875rem;
  margin-bottom: 0.625rem;
  gap: 0.5rem;
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 3.125rem;
  margin-bottom: 0.625rem;
  border: none;
  background-color: #1877f2;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 6.25rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 3.125rem;
  background-color: #fff;
  margin-bottom: 0.625rem;
  font-size: 0.9375rem;
  font-family: "Happy";
  color: black;
  border: none;
  border-radius: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  margin: 1.25rem auto;
  font-family: "Happy";
  display: flex;
  width: 100%;
  align-items: center;

  ::before {
    content: "";
    flex-grow: 2;
    background-color: #999;
    height: 0.0625rem;
    margin-right: 0.3125rem;
  }

  ::after {
    content: "";
    flex-grow: 2;
    background-color: #999;
    height: 0.0625rem;
    margin-left: 0.3125rem;
  }
`;

export const LoginWith = styled.div`
  display: flex;
  width: 100%;
  max-width: 18.75rem;
  margin-left: 0px;
  flex-direction: column;
  padding-bottom: 0.625rem;
  text-align: center;
  justify-content: center;
`;

export const SocialButton = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  margin-bottom: 0.625rem;
  font-size: 0.9375rem;
  color: black;
  border: none;
  border-radius: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
