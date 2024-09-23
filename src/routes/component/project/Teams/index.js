/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import {
  ButtonContainer,
  ContainerMidComponent,
  Inner,
  RowContainer,
  RowSubText,
  RowTestText,
  SearchButton,
  SearchContainer,
} from "./component";
import { Chartss, Chartss2, Chartss3, Title2 } from "../main/component";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { Container3, MyModal } from "routes/component/emotion/component";
const Teams = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModal2Open(true);
  };

  return (
    <Inner>
      <ContainerMidComponent>
        <RowContainer>
          <SearchContainer />
          <ButtonContainer>검색</ButtonContainer>
        </RowContainer>
        <RowTestText>
          <RowSubText></RowSubText>
          <SearchButton onClick={openModal}>글쓰기</SearchButton>
        </RowTestText>
        <MyModal isOpen={isModalOpen} closeModal={closeModal} />
      </ContainerMidComponent>
      <Container3>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5rem;
            margin: 2rem;
            margin-bottom: 5rem;
          `}
        >
          <Chartss />
          <Chartss2 />
          <Chartss3 />
        </div>
        <Link
          to={"/ProCard"}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <Title2>
            {" "}
            다음 페이지
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
          </Title2>
        </Link>
      </Container3>
    </Inner>
  );
};
export default Teams;
