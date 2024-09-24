/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ChangeEvent, useState } from "react";
import Modal from "react-modal";
import { CallGPT } from "../../../util/api/gpt";
import proData from "../../data/proData.json";

export const Container = ({ children }) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5.6rem;
      margin-top: 12rem;
    `}
  >
    {children}
  </div>
);

export const Container2 = ({ children }) => (
  <div
    css={css`
      width: 100%;
      padding-top: 10rem;
      padding-bottom: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      background-color: white;
    `}
  >
    {children}
  </div>
);
export const Container3 = ({ children }) => (
  <div
    css={css`
      width: 100%;
      padding-bottom: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
    `}
  >
    {children}
  </div>
);
export const Logo = () => (
  <img
    src="/img/logo.PNG"
    alt="검색"
    css={css`
      width: 10rem;
      margin: 5px;
    `}
  />
);

export const Search = ({ children }) => (
  <div
    css={css`
      width: 10rem;
      height: 2rem;
      border-radius: 2.8rem;
      border: 1px solid black;
    `}
  >
    {children}
  </div>
);

export const Project = ({ title, description, imagesrc }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      css={css`
        width: 24rem;
        display: flex;
        flex-direction: column;
        background-color: #f5f6fa;
        border-radius: 1.2rem;
        overflow: hidden;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
        transition: transform 0.2s, box-shadow 0.2s; /* 변환 및 그림자 효과에 트랜지션 추가 */
        transform: ${hovered ? "scale(1.05)" : "scale(1)"};
        &:hover {
          box-shadow: 0 12px 16px rgba(0, 0, 0, 0.6); /* 호버 시 그림자 효과 강화 */
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imagesrc}
        alt={imagesrc}
        css={css`
          width: 24rem;
          height: 15.5rem;
          padding: 1rem;
          border-radius: 10px;
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
        {title}
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
        {description}
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
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
            css={css`
              color: #377dff;
            `}
          >
            <path
              fill-rule="evenodd"
              d="M10.354 4.354a.5.5 0 0 0-.708-.708L5.707 7.293a1 1 0 0 0 0 1.414L9.646 11.95a.5.5 0 0 0 .708-.708L6.707 8l3.647-3.646a.5.5 0 0 0 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export const InputSelectContainer = ({ placeholder, value, onChange }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <input
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0.8rem;
        background-color:#CCE1FF;
        width: 50.6rem;
        border-radius: 20px; 
        font-family: Inter;
        border: double 0px black;
        ::placeholder { /* 이 부분을 추가하여 placeholder 스타일을 지정합니다 */
        color: #aaa;
      `}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);
export const InputSelectContainer2 = ({ placeholder, value, onChange }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
  >
    <textarea
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0.8rem;
        background-color: #cce1ff;
        width: 50.6rem;
        height: 10rem;
        border-radius: 20px;
        font-family: Inter;
        border: double 0px black;
        ::placeholder { /* 이 부분을 추가하여 placeholder 스타일을 지정합니다 */
        font-size: 1.1rem;
        color: gray;
        font-family: "JAM";
        font-style: normal;
        font-weight: 700;
        color: #aaa;
      `}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  </div>
);
export const InputContainer = ({ placeholder }) => (
  <input
    css={css`
      display: flex;
      flex-direction: column;
      padding: 1.2rem;
      background-color: #cfcfcf;
      width: 22.6rem;
      border-radius: 20px;
      font-family: Inter;
      border: double 0px black;
      font-size: 1.2rem;
      color: gray;
      font-family: "JAM";
      font-style: normal;
      font-weight: 700;
      border-radius: 1.2rem;
      line-height: 1.5;
    `}
    placeholder={placeholder}
  ></input>
);
export const BodyContainer = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      font-family: Inter;
      color: #afafaf;
      border-radius: 0 0 25px 25px;
      font-size: 1.2rem;
      color: gray;
      font-family: "JAM";
      font-style: normal;
      font-weight: 700;
      border-radius: 1.2rem;
      line-height: 1.5;
    `}
  >
    {children}
  </div>
);
export const MyModal = ({ isOpen, closeModal }) => {
  const [projectTitle, setProjectTitle] = useState(""); // 초기값은 빈 문자열
  const [projectPeriod, setProjectPeriod] = useState(""); // 초기값은 빈 문자열
  const [projectMembers, setProjectMembers] = useState(""); // 초기값은 빈 문자열
  const [projectPurpose, setProjectPurpose] = useState("");

  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const projectInfo = `이 프로젝트의 이름은 ${projectTitle} 이야 
  제작기간은 총 ${projectPeriod} 정도가 걸렸어 이 프로젝트에 참여한 사람들의 구성은 대략 ${projectMembers} 
  정도이며 이 프로젝트의 목표이자 목적은 ${projectPurpose} 이야 지금까지 내가 전달한 내용을 바탕으로
  우리가 만든 이 프로젝트를 남들에게 알릴 수 있는 매우 인상깊은 소개 문구를 만들어주면 좋겠어 이 소개문구는
  반드시 한국어로 출력해줬으면 좋겠네 그리고 남들에게 깊은 인상이 남기는 그런 멋진 문구면 좋겠어
  `;
  const handlePublish = () => {
    const newProject = {
      title: projectTitle,
      id: "kyr1234",
      description: data,
      imageSrc: "/img/test.PNG",
    };

    proData.push(newProject);
    console.log(proData);

    closeModal();
  };
  const handleClickApiCall = async () => {
    try {
      setIsLoading(true);
      const message = await CallGPT({
        prompt: `
        ${projectInfo}
        `,
      });
      setData(message);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  const handleProjectTitleChange = (event) => {
    setProjectTitle(event.target.value);
  };

  const handleProjectPeriodChange = (event) => {
    setProjectPeriod(event.target.value);
  };

  const handleProjectMembersChange = (event) => {
    setProjectMembers(event.target.value);
  };

  const handleProjectPurposeChange = (event) => {
    setProjectPurpose(event.target.value);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-top: 5.5rem;
        transition: transform 0.3s ease; /* 애니메이션 트랜지션 추가 */
        transform: translateY(${isOpen ? "0" : "100rem"});
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 55.4rem;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            padding: 3.2rem 3.2rem 1rem 3.2rem;
            width: 80rem;
            background-color: #f5f6fa;
            font-family: Inter;
            border-radius: 0 0 25px 25px;
            font-size: 1.2rem;
            color: gray;
            font-family: "JAM";
            font-style: normal;
            font-weight: 700;
            border-radius: 1.2rem;
            line-height: 1.5;
          `}
        >
          {isLoading ? (
            <div>LOADING...</div>
          ) : data ? (
            <div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    css={css`
                      max-width: 100%;
                      max-height: 300px;
                      margin-top: 1rem;
                      margin-bottom: 1rem;
                      border-radius: 20px;
                    `}
                  />
                )}
                <label
                  htmlFor="fileInput"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 0px solid black;
                    padding: 0.6rem;
                    font-size: 1rem;
                    border-radius: 10px;
                    background-color: antiquewhite;
                    margin-top: 1rem;
                    font-size: 1.2rem;
                    color: gray;
                    font-family: "JAM";
                    font-style: normal;
                    font-weight: 700;
                    border-radius: 1.2rem;
                    line-height: 1.5;
                    cursor: pointer;
                  `}
                >
                  파일 선택
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              <textarea
                css={css`
                  width: 100%;
                  height: 200px; /* 높이는 필요에 따라 조정 */
                  margin-top: 1rem;
                  font-size: 1.2rem;
                  color: gray;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 700;
                  border-radius: 1.2rem;
                  line-height: 1.5;
                `}
                value={data}
              />
              <button
                onClick={handlePublish}
                css={css`
                  margin-top: 1rem;
                  background-color: #b9e2fa;
                  border: 0px;
                  padding: 10px;
                  width: 30rem;
                  border-radius: 0 0 25px 25px;
                  font-size: 1.2rem;
                  color: #333;
                  margin-left: 9rem;
                  margin-bottom: 1rem;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 700;
                  border-radius: 1.2rem;
                  line-height: 1.5;
                  cursor: pointer;
                `}
              >
                프로젝트 소개 카드 완료
              </button>
            </div>
          ) : (
            <>
              <div
                css={css`
                  margin-left: 16rem;
                  font-size: 2rem;
                  margin-bottom: 1rem;
                `}
              >
                프로젝트 소개 카드 작성
              </div>
              <div
                css={css`
                  margin-left: 0.8rem;
                `}
              >
                프로젝트 제목
              </div>
              <BodyContainer>
                <InputSelectContainer
                  placeholder="XYZ Project"
                  buttonholder=""
                  value={projectTitle}
                  onChange={handleProjectTitleChange}
                />
              </BodyContainer>
              <div
                css={css`
                  margin-top: 1rem;
                  margin-left: 0.8rem;
                `}
              >
                제작 기간
              </div>
              <BodyContainer>
                <InputSelectContainer
                  placeholder="2023-03-12 ~ 2023-10-11"
                  buttonholder=""
                  value={projectPeriod}
                  onChange={handleProjectPeriodChange}
                />
              </BodyContainer>
              <div
                css={css`
                  margin-top: 1rem;
                  margin-left: 0.8rem;
                `}
              >
                제작 인원
              </div>
              <BodyContainer>
                <InputSelectContainer
                  placeholder="프론트 3, 벡엔드 3"
                  buttonholder=""
                  value={projectMembers}
                  onChange={handleProjectMembersChange}
                />
              </BodyContainer>
              <div
                css={css`
                  margin-top: 1rem;
                  margin-left: 0.8rem;
                `}
              >
                목표 및 제작 목적
              </div>
              <BodyContainer>
                <InputSelectContainer2
                  placeholder="다양한 사람들과 매칭되는 사이트"
                  buttonholder=""
                  value={projectPurpose}
                  onChange={handleProjectPurposeChange}
                />
              </BodyContainer>
              <button
                onClick={handleClickApiCall}
                css={css`
                  margin-top: 1rem;
                  background-color: #b9e2fa;
                  border: 0px;
                  padding: 10px;
                  width: 30rem;
                  border-radius: 0 0 25px 25px;
                  font-size: 1.2rem;
                  color: #333;
                  margin-left: 9rem;
                  margin-bottom: 1rem;
                  font-family: "JAM";
                  font-style: normal;
                  font-weight: 700;
                  border-radius: 1.2rem;
                  line-height: 1.5;
                  cursor: pointer;
                `}
              >
                프로젝트 소개 카드 제작
              </button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
