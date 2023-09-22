/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent } from "react";
export const TagList = ({ children, small }) => (
  <div
    css={css`
      display: flex;
      gap: ${small ? 0.8 : 1.6}rem;
    `}
  >
    {children}
  </div>
);

export const Main1 = () => (
  <div>
    <img
      src="/img/Main1.PNG"
      alt="검색"
      css={css`
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.5);
        margin-bottom: 4rem;
      `}
    />
  </div>
);

export const Rowdiv = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    {children}
  </div>
);
export const Chart = () => (
  <Rowdiv>
    <img
      src="/img/chart1.jpg"
      alt="검색"
      css={css`
        width: 24rem;
        border-radius: 10px;
      `}
    />
    <div
      css={css`
        width: 28rem;
        display: flex;
        flex-direction: column;
        padding: 1.6rem;
        gap: 2rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: white;
          padding: 0.8rem;
          font-size: 1.6rem;
          color: #282c34;
          justify-content: center;
          align-items: center;
          gap: 1.6rem;
          font-family: "Snow";
          font-style: normal;
          font-weight: 700;
          border-radius: 1.2rem;
        `}
      >
        <img
          src="/img/icon1.png"
          alt="검색"
          css={css`
            width: 4rem;
            border-radius: 10px;
          `}
        />
        FRONT-END
      </div>
      <div
        css={css`
          padding: 0.8rem;
          font-size: 1.6rem;
          color: #282c34;
          gap: 0.8rem;
          font-family: "JAM";
          font-style: normal;
          font-weight: 700;
          border-radius: 1.2rem;
        `}
      >
        김철수 (프론트엔드 개발자)
      </div>
      <div
        css={css`
          padding: 0.8rem;
          font-size: 1.2rem;
          color: #282c34;
          font-family: "JAM";
          font-style: normal;
          font-weight: 700;
          border-radius: 1.2rem;
          line-height: 1.5;
        `}
      >
        웹을 통해 아이디어를 현실로 만들어내는 프론트 엔드 개발자입니다.
        사용자경험을 끌어올리고, 눈에 띄는 디자인을 만들어 드립니다
        <div
          css={css`
            margin-top: 1.2rem;
            color: #377dff;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.4rem;
          `}
        >
          More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
              fill="#377DFF"
            />
          </svg>
        </div>
      </div>
    </div>
  </Rowdiv>
);

export const Chart2 = () => (
  <Rowdiv>
    <img
      src="/img/chart2.jpg"
      alt="검색"
      css={css`
        width: 24rem;
        border-radius: 10px;
      `}
    />
    <div
      css={css`
        width: 28rem;
        display: flex;
        flex-direction: column;
        padding: 1.6rem;
        gap: 2rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          background-color: white;
          padding: 0.8rem;
          font-size: 1.6rem;
          color: #282c34;
          justify-content: center;
          align-items: center;
          gap: 1.6rem;
          font-family: "Snow";
          font-style: normal;
          font-weight: 700;
          border-radius: 1.2rem;
        `}
      >
        <img
          src="/img/icon2.png"
          alt="검색"
          css={css`
            width: 4rem;
            border-radius: 10px;
          `}
        />
        BACK-END
      </div>
      <div
        css={css`
          padding: 0.8rem;
          font-size: 1.6rem;
          color: #282c34;
          gap: 0.8rem;
          font-family: "JAM";
          font-style: normal;
          font-weight: 700;
          border-radius: 1.2rem;
        `}
      >
        김민수 (백엔드 개발자)
      </div>
      <div
        css={css`
          padding: 0.8rem;
          font-size: 1.2rem;
          color: #282c34;
          font-family: "JAM";
          font-style: normal;
          font-weight: 700;
          border-radius: 1.2rem;
          line-height: 1.5;
        `}
      >
        데이터의 힘으로 현실을 변화시키는 백엔드 개발자입니다. 확장성 있는 서버
        아키텍처를 통해 웹 애플리케이션의 핵심을 지원합니다.
        <div
          css={css`
            margin-top: 1.2rem;
            color: #377dff;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.4rem;
          `}
        >
          More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
              fill="#377DFF"
            />
          </svg>
        </div>
      </div>
    </div>
  </Rowdiv>
);

export const Title2 = ({ children }) => (
  <div
    css={css`
      font-size: 2rem;
      color: #377dff;
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

export const Project1 = () => (
  <div
    css={css`
      width: 24rem;
      display: flex;
      flex-direction: column;
      background-color: #f5f6fa;
      border-radius: 1.2rem;
    `}
  >
    <img
      src="/img/project1.PNG"
      alt="검색"
      css={css`
        width: 24rem;
        height: 15.5rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      `}
    />
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.6rem;
        color: #282c34;
        gap: 0.8rem;
        font-family: "Snow";
        font-style: normal;
        border-radius: 1.2rem;
      `}
    >
      팜투마켓
    </div>
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.2rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        border-radius: 1.2rem;
        line-height: 1.5;
      `}
    >
      우리의 미션은 작은 농장에서 더 큰 시장으로! 지속 가능한 농산물 공급을 위한
      혁신적인 솔루션을 제공하고 있습니다. 함께 농산물 비즈니스를 더 쉽고
      효율적으로 운영하세요.
      <div
        css={css`
          margin-top: 1.2rem;
          color: #377dff;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
        `}
      >
        자세히 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
            fill="#377DFF"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const Project2 = () => (
  <div
    css={css`
      width: 24rem;
      display: flex;
      flex-direction: column;
      background-color: #f5f6fa;
      border-radius: 1.2rem;
    `}
  >
    <img
      src="/img/project2.PNG"
      alt="검색"
      css={css`
        width: 24rem;
        height: 15.5rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      `}
    />
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.6rem;
        color: #282c34;
        gap: 0.8rem;
        font-family: "Snow";
        font-style: normal;
        border-radius: 1.2rem;
      `}
    >
      챌린저스
    </div>
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.2rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        border-radius: 1.2rem;
        line-height: 1.5;
      `}
    >
      내 사이드 프로젝트를 기록하고 다른 열정적인 개발자들과 공유하세요. 소스
      코드와 아이디어를 보관하고, 피드백을 받아보세요. 프로젝트의 성장을 함께
      나눠보세요.
      <div
        css={css`
          margin-top: 1.2rem;
          color: #377dff;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
        `}
      >
        자세히 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
            fill="#377DFF"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const Project3 = () => (
  <div
    css={css`
      width: 24rem;
      display: flex;
      flex-direction: column;
      background-color: #f5f6fa;
      border-radius: 1.2rem;
    `}
  >
    <img
      src="/img/project3.PNG"
      alt="검색"
      css={css`
        width: 24rem;
        height: 15rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      `}
    />
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.6rem;
        color: #282c34;
        gap: 0.8rem;
        font-family: "Snow";
        font-style: normal;
        border-radius: 1.2rem;
      `}
    >
      인플AI
    </div>
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.2rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        border-radius: 1.2rem;
        line-height: 1.5;
      `}
    >
      AI 기술을 활용하여 인플루언서와 유튜버들의 효과적인 데이터 분석을
      경험해보세요. 트렌드 분석, 컨텐츠 퍼포먼스, 그리고 시장 예측을 통해 더
      스마트한 의사결정을 하세요.
      <div
        css={css`
          margin-top: 1.2rem;
          color: #377dff;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
        `}
      >
        자세히 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
            fill="#377DFF"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const Project4 = () => (
  <div
    css={css`
      width: 24rem;
      display: flex;
      flex-direction: column;
      background-color: #f5f6fa;
      border-radius: 1.2rem;
    `}
  >
    <img
      src="/img/project4.PNG"
      alt="검색"
      css={css`
        width: 24rem;
        height: 15.5rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      `}
    />
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.6rem;
        color: #282c34;
        gap: 0.8rem;
        font-family: "Snow";
        font-style: normal;
        border-radius: 1.2rem;
      `}
    >
      ProParty
    </div>
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.2rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        border-radius: 1.2rem;
        line-height: 1.5;
      `}
    >
      매일의 생각을 기록하고, 프로젝트를 관리하며, 세상과 나를 공유하는 퍼스널
      웹 플랫폼. 나만의 디지털 공간에서 더 나은 자신을 만들어보세요!
      <div
        css={css`
          margin-top: 1.2rem;
          color: #377dff;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
        `}
      >
        자세히 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
            fill="#377DFF"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const Project5 = () => (
  <div
    css={css`
      width: 24rem;
      display: flex;
      flex-direction: column;
      background-color: #f5f6fa;
      border-radius: 1.2rem;
    `}
  >
    <img
      src="/img/project5.PNG"
      alt="검색"
      css={css`
        width: 24rem;
        height: 15.5rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      `}
    />
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.6rem;
        color: #282c34;
        gap: 0.8rem;
        font-family: "Snow";
        font-style: normal;
        border-radius: 1.2rem;
      `}
    >
      떨어지기 전에 멈춰! 멈춰!
    </div>
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.2rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        border-radius: 1.2rem;
        line-height: 1.5;
      `}
    >
      시간을 두고 떨어지는 물건을 멈추기 위한 반응 속도를 테스트하세요! 랜덤한
      순간에 버튼을 클릭하여 스릴 넘치는 게임을 즐겨보세요. 얼마나 빨리 반응할
      수 있는지 도전해보세요!
      <div
        css={css`
          margin-top: 1.2rem;
          color: #377dff;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
        `}
      >
        자세히 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
            fill="#377DFF"
          />
        </svg>
      </div>
    </div>
  </div>
);

export const Project6 = () => (
  <div
    css={css`
      width: 24rem;
      display: flex;
      flex-direction: column;
      background-color: #f5f6fa;
      border-radius: 1.2rem;
    `}
  >
    <img
      src="/img/project6.PNG"
      alt="검색"
      css={css`
        width: 24rem;
        height: 15.5rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
      `}
    />
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.6rem;
        color: #282c34;
        gap: 0.8rem;
        font-family: "Snow";
        font-style: normal;
        border-radius: 1.2rem;
      `}
    >
      PYRPG
    </div>
    <div
      css={css`
        padding: 0.8rem;
        font-size: 1.2rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        border-radius: 1.2rem;
        line-height: 1.5;
      `}
    >
      자신만의 캐릭터를 창조하고 무한한 모험을 떠나는 TRPG의 세계로 입장하세요.
      스토리를 주도하며 다른 플레이어와 협력하거나 경쟁하여 완전히 새로운 경험을
      만들어보세요!
      <div
        css={css`
          margin-top: 1.2rem;
          color: #377dff;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.4rem;
        `}
      >
        자세히 보기
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.28308 11.0143L15.6281 11.0143L9.35508 17.2903C9.10973 17.524 8.97086 17.848 8.97086 18.1868C8.97086 18.5256 9.10973 18.8496 9.35508 19.0833V19.0833C9.58875 19.3287 9.91276 19.4675 10.2516 19.4675C10.5904 19.4675 10.9144 19.3287 11.1481 19.0833L19.4711 10.7583C19.9842 10.1717 19.9842 9.29592 19.4711 8.7093L11.1461 0.384304C10.9124 0.138947 10.5884 8.01086e-05 10.2496 8.01086e-05C9.91076 8.01086e-05 9.58675 0.138947 9.35308 0.384304H9.35308C9.10773 0.61797 8.96886 0.941983 8.96886 1.2808C8.96886 1.61962 9.10773 1.94364 9.35308 2.1773L15.6281 8.45231L1.28308 8.45231C0.93734 8.43135 0.59919 8.55956 0.354267 8.80449C0.109341 9.04941 -0.0188796 9.38756 0.00208282 9.73331V9.73331C-0.0188796 10.079 0.109341 10.4172 0.354263 10.6621C0.599189 10.907 0.937336 11.0353 1.28308 11.0143V11.0143Z"
            fill="#377DFF"
          />
        </svg>
      </div>
    </div>
  </div>
);
