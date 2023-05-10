import React from "react";
import {
  ModalSection,
  ModalHeaderButton,
  OpenModals,
  ModalHeader,
  ModalText,
  ModalBody,
  ModalTitle,
  ModalFooter,
} from "./ModalCss";
import Button from "../Button";

const RefuseModal = props => {
  const { modalState, close } = props;

  return (
    <div>
      {modalState ? (
        <OpenModals>
          <ModalSection>
            <ModalHeader>
              <ModalTitle>
                {" "}
                <br />{" "}
              </ModalTitle>

              <ModalHeaderButton onClick={close}>&times;</ModalHeaderButton>
            </ModalHeader>
            <ModalBody>
              <ModalText size="20">준비 중입니다.</ModalText>
              <ModalText size="20">
                <br />
              </ModalText>
              <Button btnColor="gray" onClick={close}>
                확인
              </Button>
            </ModalBody>
          </ModalSection>
        </OpenModals>
      ) : null}
    </div>
  );
};
export default RefuseModal;
