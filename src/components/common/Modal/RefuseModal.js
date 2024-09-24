import React from "react";
import { Button } from "../../DetailPage/DetailPageCss";
import {
  ModalSection,
  ModalHeaderButton,
  OpenModals,
  ModalHeader,
  ModalText,
  ModalBody,
  ModalFooter,
  ModalTitle,
} from "./ModalCss";

const RefuseModal = props => {
  const { open, close } = props;

  const any = () => {
    alert("함수 만들면 대체할 공간");
  };
  return (
    <div>
      {open ? (
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
              <ModalText size="28">거절 하시겠습니까?.</ModalText>
              <ModalText size="20">
                거절과 동시에 데이터가 사라집니다.
              </ModalText>
            </ModalBody>

            <ModalFooter>
              <Button backcolor="#7B7B7B" color="#2B2B2B" onClick={close}>
                취소
              </Button>
              <Button backcolor="#4F85EB" color="#FFFFFF" onClick={any}>
                거절
              </Button>
            </ModalFooter>
          </ModalSection>
        </OpenModals>
      ) : null}
    </div>
  );
};
export default RefuseModal;
