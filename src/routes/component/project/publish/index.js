import React from "react";
import {
  Buttons,
  ContainerComponent,
  GridBox,
  Header1,
  Header2,
  Inner,
  LinkInputBox2,
  PublishImg,
  TextInputBox,
  TextInputBox2,
  TextInputBox3,
} from "./component";
import Button from "common/Button";

const Publish = () => {
  return (
    <Inner>
      <Header1>프로젝트 발행 페이지</Header1>
      <ContainerComponent>
        <PublishImg />
        <TextInputBox />
        <TextInputBox2 />
      </ContainerComponent>
      <ContainerComponent>
        <Header1>프로젝트 내용</Header1>
        <GridBox>
          <Header2>소속 팀</Header2>
          <TextInputBox3 />
          <Header2>서비스 형태</Header2>
          <TextInputBox3 />
          <Header2>프로젝트 기간</Header2>
          <TextInputBox3 />
          <Header2>사용된 기술 스택</Header2>
          <TextInputBox3 />
        </GridBox>
      </ContainerComponent>
      <ContainerComponent>
        <Header1>팀원 구성</Header1>
        <LinkInputBox2 />
        <LinkInputBox2 />
      </ContainerComponent>
      <Buttons>프로젝트 발행</Buttons>
    </Inner>
  );
};
export default Publish;
