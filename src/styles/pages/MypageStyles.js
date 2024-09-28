import styled from "@emotion/styled";

export const UpdatedNewsTitle = styled.div`
  flex: 0.1;
  font-family: "Pix";
  color: steelblue;
  border-bottom: 2px solid silver;
  margin-right: 20px;
  margin-left: 20px;
`;

export const UpdatedNewsTitle2 = styled.div`
  flex: 0.1;
  font-family: "Pix";
  color: darkblue;
  font-size: 30px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const UpdatedNewsContents = styled.div`
  display: flex;
  flex: 0.3;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: "Pix";
`;

export const UpdatedNewsLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: "Pix";
`;

export const UpdatedNewsLeftItem = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  font-size: 13px;
  color: black;
  font-family: "Pix";
`;

export const UpdatedNewsRed = styled.div`
  color: whitesmoke;
  background-color: coral;
  font-family: "Pix";
  font-size: 14px;
  border-radius: 3px;
  width: 4rem;
  height: 1rem;
`;

export const UpdatedNewsBlue = styled.div`
  color: whitesmoke;
  background-color: #4f92cd;
  font-family: "Pix";
  font-size: 14px;
  border-radius: 3px;
  width: 4rem;
  height: 1rem;
`;

export const UpdatedNewsRight = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  font-family: "Pix";
`;

export const UpdatedNewsRightItem = styled.div`
  flex: 0.3;
  font-family: "Pix";
  color: black;
  font-size: 12px;
  line-height: 20px;
`;

export const UpdatedNewsRightNumber = styled.div`
  color: navy;
  font-size: 10px;
  font-family: "Pix";
`;

export const MiniroomTitle = styled.div`
  flex: 0.1;
  font-family: "Pix";
  color: steelblue;
  border-bottom: 2px solid silver;
  margin-right: 20px;
  margin-left: 20px;
`;

export const MiniroomGif = styled.img`
  width: 500px;
  height: 300px;
  margin-top: 15px;
  margin-left: 25px;
  border-radius: 5px;
`;

export const BookCover = styled.div`
  background-color: skyblue;
  border-radius: 0.5625rem;
  border: 0.0625rem solid #738186;
  width: 72rem;
  height: 48rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BookDot = styled.div`
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  border-style: dashed;
  color: aliceblue;
`;

export const Page = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  color: black;
  background-color: whitesmoke;
  border-radius: 9px;
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: "Pix";
`;

export const Upside = styled.div`
  flex: 0.1;
  color: black;
  font-size: 13px;
`;

export const Title = styled.div`
  font-family: "Stylish", sans-serif;
  font-size: 25px;
`;

export const HomeMain = styled.div`
  display: flex;
  flex: 1;
`;

export const HomeContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 30px;
  margin-bottom: 15px;
  border: 1px solid silver;
  border-radius: 9px;
  background-color: white;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  margin-left: 15px;
  margin-bottom: 15px;
  border: 1px solid silver;
  border-radius: 9px;
  background-color: white;
  font-family: "Nanum Gothic", sans-serif;
`;

export const Profile1 = styled.div`
  flex: 0.6;
`;

export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  margin: 20px;
  border-radius: 5px;
`;

export const Profile2 = styled.div`
  flex: 1;
  color: black;
  font-size: 13px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Profile3 = styled.div`
  flex: 0.1;
  color: black;
  font-size: 12px;
  margin: 20px;
  margin-bottom: 30px;
`;

export const ProfileDropdown = styled.div`
  flex: 0;
  border: 1px solid #c9d4da;
  padding: 5px;
  margin-top: 10px;
  font-size: 0.8rem;
  position: relative;
`;

export const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-top: 5px solid #838383;
`;

export const DropdownBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const DropdownContentHover = styled.div`
  &:hover > .dropdown-content {
    display: block;
  }
`;

export const DropdownContentA = styled.a`
  display: block;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 6px;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.1;
  margin-top: 70px;
  margin-bottom: 360px;
  margin-right: 15px;
  font-family: "Nanum Gothic", sans-serif;
`;

export const MenuBarLiA = styled.a`
  flex: 1;
  display: inline-block;
  background-color: steelblue;
  color: whitesmoke;
  text-align: left;
  line-height: 30px;
  width: 60px;
  margin-top: 6px;
  margin-bottom: 6px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    background-color: #4f92cd;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  text-decoration: none;
`;

export const LinkStyled = styled.a`
  text-decoration: none;
  font-size: 13px;
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const DiaryEditor = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 20px;
`;
