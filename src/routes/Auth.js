import { authService } from "fbase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";

// 자동으로 임폴트 됨
const Auth = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");
    const onChange = (event) => {
        // 발생한 이벤트의 이름과 값을 가져옴
        const {target: {name,value}} = event;
        if(name === "email"){
            setEmail(value)
        } else if(name === "password"){
            setPassword(value)
        }
    }
    // async - await 비동기적 처리를 위해서 await를 반환
    const onSubmit = async(event) => {
        event.preventDefault();
        const auth = getAuth();
        let data;
        try{
            if(newAccount){
                // 계정생성
                // email, password로 계정 생성
                data = await createUserWithEmailAndPassword(auth,email,password)
            } else{
                // 로그인
                data = await signInWithEmailAndPassword(auth,email,password)
            }
            console.log(data)
        }catch(error){
            // error 의 내용을 error 메세지로 바꾸고 출력
            setError(error.message);
        }

    }
    // 버튼 클릭시 newAccount를 반대로 바꾼다 true -> false ...
    // 구글이나 깃허브로 로그인 기능
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async(event) => {
        //ES6 문법
        const {target:{name}} = event;
        const auth = authService;
        let provider;
        if(name === "google"){
            provider = new GoogleAuthProvider();
        }else if(name === "github"){
            provider = new GithubAuthProvider();
        }
        const data = await signInWithPopup(auth, provider);
        console.log(data);
    } 
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                name = "email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={onChange}
                required/>

                <input 
                name="password"
                type="password" 
                placeholder="Password"
                value={password} 
                onChange={onChange}
                required/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
            // 
            <span onClick={toggleAccount}>{newAccount ? "Create Account":"Sign In"}</span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
            </div>
        </div>
    )
}
export default Auth;