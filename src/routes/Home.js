import React, { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import '../css/Home.css'
import { Form } from "react-router-dom";
import { dbService } from "fbase";
import { collection, onSnapshot, addDoc,query, orderBy, getDocs } from "firebase/firestore";
import Nweet from "../components/Nweet";
// 자동으로 임폴트 됨
const Home = ({userObj}) => {
    const [nweet,setNweet]= useState("");
    const [nweets,setNweets] = useState([]);

    useEffect(()=> {
        // 어떤 행동을 취했을 때 DB가 그것을 감지해서 사용 할 수 있도록
        const q = query(
            collection(dbService,"DBTable"),
            orderBy("createdAt", "desc")
        )
        onSnapshot(q,(snapshot) => {
            const DBArray = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                
            }));
            setNweets(DBArray)
        });
    },[])

    // 콜랙션 = 문서들의 모음
    // 문서를 생성
    const onSubmit = async(event) =>{
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "DBTable"), {
              text : nweet,
              creatorId: userObj.uid,
              createdAt: Date.now(),
              
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            console.error("Error adding document: ", error);
          }
          setNweet("");
    };

    const onChange = (event) => {
        // 이벤트 안에 있는 target의 value를 달라는 뜻
        const{
            target:{value},
        }= event;
        setNweet(value);
    }
    return(
        <div className="Hbody">

        <form onSubmit={onSubmit}>
            <input type="text" onChange ={onChange} value={nweet} placeholder="문장 입력?" maxLength={120}/>
            <input type="submit" value="Button"/>
        </form>
        <div>

            {nweets.map( (User) => (
            <Nweet key ={User.id} nweetObj={User} isOwner={User.creatorId === userObj.uid}/>
            ))}

        </div>
        </div>
    )
}
export default Home;

