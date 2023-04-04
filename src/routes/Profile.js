import { authService } from "fbase";
import React from "react";
import { useNavigate } from "react-router-dom";

// 자동으로 임폴트 됨

// 로그아웃 기능 생성
// 최신 버전은 useNavigate 라는 Hook을 통해서 url 변경 가능
const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/');
    }
    return (

        <>
        <button onClick={onLogOutClick}>Log out</button>
        </>
    )
}
export default Profile;