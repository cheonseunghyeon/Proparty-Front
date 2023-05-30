import { authService, dbService} from "fbase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Profile.css'
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
// 자동으로 임폴트 됨

// 로그아웃 기능 생성
// 최신 버전은 useNavigate 라는 Hook을 통해서 url 변경 가능
const Profile = ({ userObj}) => {
    const navigate = useNavigate();
    const [newDisplayName, setnewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/');
    }
    const getMyNweets = async() => {
        const q = query(
            collection(dbService,"DBTable"),
            where("creatorId", "==", userObj.uid),
            orderBy("createdAt")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
    useEffect(() => {
        getMyNweets();
    },[])
    const onsubmit = async (event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName){
            await updateProfile(userObj,
                {displayName: newDisplayName});
        }

    }
    const onchange = (event) => {
        const {
            target : {value},
        } = event;
        setnewDisplayName(value);
    }
    
    return (

        <div className="Pbody">
            <form onSubmit={onsubmit}>
                <input 
                onChange={onchange}
                type="text" 
                placeholder="Display name"
                value={newDisplayName}/>
                <input type="submit" value={"Update Profile"}/>
                <br/>
                <input type="file" accept="image/*" />
            </form>
            <button onClick={onLogOutClick}>Log out</button>
        </div>
    )
}
export default Profile;