/** @jsxImportSource @emotion/react */

import { css,keyframes } from "@emotion/react";

export const OpenModals = ({ children }) => {
  return (
    <div
      css={css`
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
        color: black;
        animation: ${modal_bg_show} 0.3s;
        display: flex;
        align-items: center;
      `}
    >
        {children}
    </div>
  );
};
export const ModalSection = ({ children }) => {
    return (
      <div
        css={css`
          width: 90%;
          max-width: 640px;
          margin: 0 auto;
          border-radius: 0.3rem;
          background-color: #2B2B2B;
          animation: ${modal_show} 0.3s;
          overflow: hidden;
        `}
      >
        {children}
      </div>
    );
  };

  export const ModalHeader = ({ children }) => {
    return (
      <div
        css={css`
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #7B7B7B;
        font-weight: 700;
        `}
      >
        {children}
      </div>
    );
  };
  export const ModalTitle = ({ children }) => {
    return (
      <div
        css={css`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        background-color: #7B7B7B;
        `}
      >
        {children}
      </div>
    );
  };
  export const ModalHeaderButton = ({ children,onClick }) => {

    return (
      <button
        css={css`
            position: absolute;
            top: 15px;
            right: 15px;
            width: 30px;
            font-size: 21px;
            font-weight: 700;
            text-align: center;
            color: #999;
            background-color: transparent;
        `}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  export const ModalBody = ({ children }) => {
    return (
      <div
        css={css`
            padding: 16px;
            height: 180px;
            color: aliceblue;
            text-align: center;
            padding-top: 50px;
        `}
      >
      {children}
      </div>
    );
  };

  export const ModalText = ({ children,size }) => {
    return (
      <div
        css={css`
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: ${size}px;
          line-height: 28px;
          margin-bottom: 30px;
          margin-top : 30px;
          color: #FFFFFF;
        `}
      >
        {children}
      </div>
    );
  };

  export const ModalFooter = ({ children }) => {
    return (
      <div
        css={css`
            padding: 12px 16px;
            text-align: center;
        `}
      >
      {children}
      </div>
    );
  };
export const Modals = ({ children }) => {
  return (
    <div
      css={css`
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
        color: black;
      `}
    >
        {children}
    </div>
  );
};

  const modal_show = keyframes `
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  `

  const modal_bg_show = keyframes `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  `