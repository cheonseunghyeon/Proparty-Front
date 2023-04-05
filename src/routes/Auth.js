import { authService } from "fbase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Img1 from "../img/Google.png"
import Img2 from "../img/GitHub.png"
import '../css/Auth.css'
// 자동으로 임폴트 됨
const Auth = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");
    const [bgImage, setBgImage] = useState("");

     // 이미지 파일명을 랜덤으로 선택하는 함수
    function getRandomImage() {
        const images = ["/img/1.jpg","/img/2.jpg","/img/3.jpg","/img/4.jpg"];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

      // 컴포넌트가 마운트될 때 실행되는 함수
    useEffect(() => {
        const randomImage = getRandomImage();
        setBgImage(randomImage);
    }, []);

    const onChange = (event) => {
        // 발생한 이벤트의 이름과 값을 가져옴
        const {target: {name,value}} = event;
        // 발생한 이벤트가 email이면 - value를 입력한 이미지로 변경
        if(name === "email"){
            setEmail(value)
        } else if(name === "password"){
        // 발생한 이벤트가 password이면 - value를 입력한 이미지로 변경
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
    const Image = "../img/1.jpg";
    return(
        <div className="backColor">
            <div className="backSet">
                <h1>Login</h1>
                <form onSubmit={onSubmit} className="setup">
                    <div className="int-area">
                        <input 
                        name = "email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
                        required/>                    
                    </div>
                    <div className="int-area">
                        <input 
                        name="password"
                        type="password" 
                        placeholder="Password"
                        value={password} 
                        onChange={onChange}
                        required/>                     
                    </div>
                    <div className="btn-area">
                        <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
                        <div>
                            <input type="button"onClick={toggleAccount} value={"Sign In"}/>
                        </div>
                        <p className="text">또는</p>
                        <div>
                            <button onClick={onSocialClick} name="google"><img src = {Img1}></img>구글 계정으로 로그인</button>
                        </div>
                        <div>
                            <button onClick={onSocialClick} name="github"><img src = {Img2}></img>Githu로 로그인</button>
                        </div>    
                        </div>
                    {error}
                </form> 
                 
                 {/* 
                 <span onClick={toggleAccount}>{newAccount ? "Create Account":"Sign In"}</span> 
                <div className="Loginwith">
                    <div>
                        <button onClick={onSocialClick} name="google"><img src = {Img1}></img>구글 계정으로 로그인</button>
                    </div>
                    <div>
                        <button onClick={onSocialClick} name="github"><img src = {Img2}></img>Githu로 로그인</button>
                    </div>
                </div>
                  */}

            </div>
        </div>
    )
}
export default Auth;