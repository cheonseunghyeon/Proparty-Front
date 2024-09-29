import styled from "@emotion/styled";

export const BackColor = styled.div`
  background-color: white;
  background-repeat: no-repeat;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(1, 1, 1, 0.5);
`;

export const BackSet = styled.div`
  display: inline-flex;
  width: 80%;
  max-width: 38.375rem; /* max-width: 550px */
  padding: 7rem 3rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  filter: brightness(100%);
  text-align: center;
  background-color: aliceblue;
  border-radius: 0.625rem;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 3.5rem 2rem;
    max-width: 26rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
    max-width: 22rem;
  }
`;
export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 2.5rem; /* 40px */
  color: #0077be;
  font-family: "Roboto";

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const IntArea = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    max-width: 22rem;
  }

  @media (max-width: 480px) {
    max-width: 18rem;
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: 1.25rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #999;
  font-size: 1.125rem;
  color: rgba(0, 0, 0, 0.8);
  outline: none;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    cursor: pointer;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.875rem;
  margin-bottom: 0.625rem;
  gap: 0.5rem;
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 3.125rem;
  margin-bottom: 0.625rem;
  border: none;
  background-color: #1877f2;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 6.25rem;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    cursor: pointer;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    font-size: 1.125rem;
    height: 2.875rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    height: 2.75rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3.125rem;
  background-color: #fff;
  margin-bottom: 0.625rem;
  font-size: 0.9375rem;
  font-family: "Happy";
  color: black;
  border: none;
  border-radius: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    cursor: pointer;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
    height: 2.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8125rem;
    height: 2.75rem;
  }
`;

export const Text = styled.p`
  margin: 1.25rem auto;
  font-family: "Happy";
  display: flex;
  width: 100%;
  align-items: center;

  ::before {
    content: "";
    flex-grow: 2;
    background-color: #999;
    height: 1px;
    margin-right: 0.3125rem;
  }

  ::after {
    content: "";
    flex-grow: 2;
    background-color: #999;
    height: 1px;
    margin-left: 0.3125rem;
  }
`;

export const LoginWith = styled.div`
  display: flex;
  width: 100%;
  max-width: 18.75rem;
  flex-direction: column;
  padding-bottom: 0.625rem;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 16rem;
  }

  @media (max-width: 480px) {
    max-width: 14rem;
  }
`;

export const SocialButton = styled.button`
  width: 80%;
  height: 2.5rem;
  background-color: #fff;
  margin-bottom: 0.625rem;
  font-size: 0.9375rem;
  color: black;
  border: none;
  border-radius: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    cursor: pointer;
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
    height: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    height: 2rem;
  }
`;
