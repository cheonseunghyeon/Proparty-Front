import React, { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import '../css/Home.css'
import '../css/Layout.css'
import { Form, Link } from "react-router-dom";
import { dbService, storageService } from "fbase";
import { collection, onSnapshot, addDoc,query, orderBy, getDocs } from "firebase/firestore";
import Nweet from "../components/Nweet";
import { getDownloadURL , ref, uploadString } from "@firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import img from "./char.png"
import img2 from "./back3.jpg"
import img3 from "./profile.png"
import img4 from "./aaa.png"

// 자동으로 임폴트 됨
// crud 구현

const Home = ({userObj}) => {
    const [nweet,setNweet]= useState("");
    const [nweets,setNweets] = useState([]);
    // 이미지 파일 관리
    const [attachment, setAttachment] = useState("");

    useEffect(()=> {
        // 어떤 행동을 취했을 때 DB가 그것을 감지해서 사용 할 수 있도록
        const q = query(
            collection(dbService,"DBTable"),
            orderBy("createdAt", "desc")
        )
        // onSnapshot 데이터 베이스에 무슨 일이 발생 했을 때 알람이 옴
        // 새로운 스냅샷을 받을 때에는 배열을 may 으로 만듭니다.
        onSnapshot(q,(snapshot) => {
          // DB의 map에 id와 data를 저장
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
        let attachmentUrl = ""

        // 이미지 파일이 존재할 경우
        if (attachment != ""){
          //이미지와 파일 을 저장하는 문서로 생성
          const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);

          // data_url은  파일 로드할 때 readAsDataURL에서 실행
          const response = await uploadString(fileRef, attachment,"data_url");
          attachmentUrl = await getDownloadURL(fileRef, attachment,"data_url");
        }

        const DBTable = {
              text : nweet,
              creatorId: userObj.uid,
              createdAt: Date.now(),
              attachmentUrl,
        }
        const docRef = await addDoc(collection(dbService, "DBTable"), DBTable);
        setNweet("");
        setAttachment("");
    };

    const onChange = (event) => {
        // 이벤트 안에 있는 target의 value를 달라는 뜻
        const{
            target:{value},
        }= event;
        setNweet(value);
    }

    // input type="file" 이 변할 때 호출
    const onFileChange = (event) => {
      // 이때 중요한 점) 파일의 위치는 
      // event.target.files 에 위치
      console.log(event.target.files);

      // event 안의 target 안으로 이동해서 files을 가져오라는 뜻
      // 즉 event.target.files과 동일 ES6 문법
        const {
          target: { files },
        } = event;

        const theFile = files[0];
        // FileReader API 사용
        // 비동기 데이터 읽기를 위해 읽을 파일을 가르키는 FILE 객체를 만든 후 
        // 그 객체를 통해 파일 내용을 읽어 사용자의 컴퓨터로 저장

        const reader = new FileReader();


        // 파일을 읽고 FileReader 이라는 객체를 생성
        
        // 파일을 읽기 위해아래 onloadend 이벤트 실행 그후 이벤트가 끝났을 때 
        // finishedEvent 에는 객체에는 이미지 파일을 읽어서 텍스트 형태로 저장
        reader.onloadend = (finishedEvent) => {
          console.log(finishedEvent);
          const {
            currentTarget: {result},
          } = finishedEvent;
          // finishedEvent의 결과를 setAttachment로 설정
          setAttachment(result);
        };
        // reader.readAsDataURL(theFile)
        reader.readAsDataURL(theFile);
      };
      const onClear = () => setAttachment("");
      return (
        <>
        <div class="bookcover">
          <div class="bookdot">
            <div class="page">
              <div class="home">

                <div class="home_main">
                  <div class="profile">
                    <div class="profile_1">
                      <img class="profile_image" src={img4}/>
                    </div>
                    <div class="profile_2"> 프로필 작성 공간<br/>
                    <br/>프로필을 설명할 수 있는 공간 입니다.</div>
                    <div class="profile_3">* 주소 등을 기록하는 공간
                      <div class="profile-dropdown">
                        <div class="dropdown-btn">
                          <div class="dropdown-title">Github</div>
                          <div class="triangle-down"></div>
                        </div>
                        <div class="dropdown-content">
                          <a href="https://programming-oddments.tistory.com/" target="_blank">Devlog</a>
                          <a href="https://github.com/joseph-106" target="_blank">Github</a>
                          <a href="https://www.instagram.com/ksj_106/" target="_blank">Instagram</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="home_contents">
                    <div class="updated_news_title"><br/><strong>Updated news</strong></div>
                    <div class="updated_news_contents">
                      <div class="updated_news_left">
                      <div className="bodydot">
                        <form onSubmit={onSubmit}>
                        <input value={nweet} 
                        onChange={onChange} 
                        type="text" 
                        placeholder="what's on your mind?" 
                        maxLength={120}/>

                        {/* 이미지 파일을 업로드하기 위한 input */}
                        <input type="file" accept="image/*" onChange={onFileChange}/>
                        <input type="submit" value= "입력"/>
                        {attachment && (
                          <div>
                            <img src={attachment} width="300px" height="200px"/>
                            <button onClick={onClear}>Clear</button>
                          </div>
                        )}
                        </form>
                        <div>
                        {nweets.map( (User) => (
                          // Nweet 컴포넌트를 호출 필요한 데이터를 props로 전달
                        <Nweet 
                        // id와 접속한 유저 정보 그리고 접속한 유저와 작성한 유저가 같은지 여부
                          key ={User.id} 
                          nweetObj={User} 
                          isOwner={User.creatorId === userObj.uid}
                        />
                        ))}
                        </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <ul class ="menu_bar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/Diary">Diary</Link></li>
                <li><Link to="/">Photo</Link></li>
                <li><Link to="/Visitor">Visitor</Link></li>
                <li><Link to="/Visitor">Chat</Link></li>
              </ul>
              </div>
            </div>
          </div>
        </>

    )
  }

export default Home;

