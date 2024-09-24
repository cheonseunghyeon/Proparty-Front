/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import  { useState } from 'react';

import RefuseModal from './RefuseModal';

export const ModalButton = ({ children, backcolor, color }) => {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };
  const closeModal = () => {
      setModalOpen(false);
  };
  return (
      <>
          <button
              css={css`
              background-color: ${backcolor};
              color: ${color};
              width: 5em;
              height: 2.5em;
              font-style: normal;
              font-weight: 700;
              font-size: 1.25em;
              text-align: center;
              border-radius: 0.69vw;
              &:hover {
                background-color: black;
                color : white;
              }
              `}
              onClick={openModal}
              >
                  {children}
          </button>
          <RefuseModal open={modalOpen} close={closeModal} header="Modal heading" />
      </>
  );
};