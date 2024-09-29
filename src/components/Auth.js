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
import {
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
  Form,
} from "../styles/pages/AuthpageStyles";

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
    <BackColor>
      <BackSet>
        <Title>Login</Title>
        <Form onSubmit={onSubmit}>
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
            <Text>또는</Text>
            <SocialButton onClick={onSocialClick} name="google">
              <img src="/img/Google.png" alt="Google" /> 구글 계정으로 로그인
            </SocialButton>
            <SocialButton onClick={onSocialClick} name="github">
              <img src="/img/GitHub.png" alt="GitHub" /> GitHub로 로그인
            </SocialButton>
          </BtnArea>
        </Form>
        {error && <p>{error}</p>}
      </BackSet>
    </BackColor>
  );
};

export default React.memo(Auth);
