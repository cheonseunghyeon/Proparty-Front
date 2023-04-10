import React, { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import '../css/Home.css'
import { Form } from "react-router-dom";
import { dbService } from "fbase";
import { collection, onSnapshot, addDoc,query, orderBy, getDocs } from "firebase/firestore";
// 자동으로 임폴트 됨
const Home = ({userObj}) => {
    const [nweet,setNweet]= useState("");
    const [nweets,setNweets] = useState([]);
    const getNweets = async ()=>{
        // 여기서 쿼리란 collection - 문서 를 말함
        const nweets = await getDocs(collection(dbService, "DBTable"));
        nweets.forEach((doc)=>{
            // set 함수 선언 시 값 대신 함수를 전달 가능
            // 함수 전달 시 리액트는 이전 값에 접근 가능하게 해줌
            // 즉 현재의 배열(doc.data()) -> 이전 배열(...prev) 순으로 정렬
            const nweetObject = {
                ...doc.data(),
                id: doc.id,
            }
            setNweets((prev) => [nweetObject, ...prev])
        })
    }

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
            <input type="text" onChange ={onChange} value={nweet} placeholder="너의 생각은?" maxLength={120}/>
            <input type="submit" value="Nweet"/>
        </form>
        <div>
            {nweets.map(nweet => <div key={nweet.id}>
                <h4>{nweet.text}</h4>
                </div>)}
        </div>
        </div>
    )
}
export default Home;

