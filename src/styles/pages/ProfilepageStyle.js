import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  background-color: #f9f9f9;
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  object-fit: cover;
  border: 0.125rem solid #ddd;
`;

export const ProfileForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 18.75rem;
  gap: 0.625rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  background-color: white;
  color: black;
`;
export const ImageButton = styled.input`
  display: flex;
  margin: 0.625rem auto;
  padding: 0.625rem;
  background-color: lightgreen;
  color: white;
  border: none;
  border-radius: 6.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  &:hover {
    background-color: #0056b3;
  }
`;

export const FormButton = styled.input`
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  text-align: center;
  color: white;
  border-radius: 20px;
  background-color: #04aaff;
  cursor: pointer;
  }
`;

export const LogOutButton = styled.span`
  width: 100%;
  max-width: 18.75rem;
  padding: 0.625rem 0;
  text-align: center;
  background-color: #ff4d4f;
  color: white;
  border-radius: 6.25rem;
  cursor: pointer;
  margin: 0.625rem 0;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d9363e;
  }
`;
