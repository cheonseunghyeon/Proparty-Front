import React from "react";
import {
  ContainerComponent,
  GridBox,
  Header1,
  Header2,
  Header3,
  PublishImg,
  TextInputBox,
  TextInputBox3,
} from "./component";
import { Inner } from "styles/common/CommonStyles";

const Detail = () => {
  return (
    <Inner>
      <Header1>프로젝트 발행 페이지</Header1>
      <ContainerComponent>
        <PublishImg />
        <TextInputBox />
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
        <Header1>프로젝트 링크</Header1>
        <Header3>http://github.com</Header3>
      </ContainerComponent>
      <ContainerComponent>
        <Header1>프로젝트 링크</Header1>
        <Header3>http://github.com</Header3>
      </ContainerComponent>
    </Inner>
  );
};
export default Detail;
