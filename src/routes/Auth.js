import { authService } from "fbase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import Img1 from "../img/Google.png";
import Img2 from "../img/GitHub.png";
import {
  GlobalStyles,
  BackColor,
  BackSet,
  Title,
  IntArea,
  Input,
  BtnArea,
  SubmitButton,
  Button,
  Text,
  LoginWith,
  SocialButton,
} from "../styles/AuthStyles";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    let data;
    try {
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    const auth = authService;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(auth, provider);
    console.log(data);
  };

  return (
    <>
      <BackColor>
        <BackSet>
          <Title>Login</Title>
          <form onSubmit={onSubmit}>
            <IntArea>
              <Input
                name="email"
                type="text"
                placeholder="Email"
                maxLength="20"
                value={email}
                onChange={onChange}
                required
              />
            </IntArea>
            <IntArea>
              <Input
                name="password"
                type="password"
                maxLength="15"
                placeholder="Password"
                value={password}
                onChange={onChange}
                required
              />
            </IntArea>
            <BtnArea>
              <SubmitButton
                type="submit"
                value={newAccount ? "Create Account" : "Log In"}
              />
              <Button type="button" onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
              </Button>
            </BtnArea>
            <Text>또는</Text>
            <LoginWith>
              <SocialButton onClick={onSocialClick} name="google">
                <img src={Img1} alt="Google" /> 구글 계정으로 로그인
              </SocialButton>
              <SocialButton onClick={onSocialClick} name="github">
                <img src={Img2} alt="GitHub" /> GitHub로 로그인
              </SocialButton>
            </LoginWith>
          </form>
          {error && <p>{error}</p>}
        </BackSet>
      </BackColor>
    </>
  );
};

export default Auth;
