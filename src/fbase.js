// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // firebase의 모든 것을 반환하는 것이 아니라 서비스 일부분만 반환
  // 이거 한 번만 선언하면 이 함수를 변수의 이름으로 호출 가능
  export const authService = getAuth(app);

  //firebase db 만들기
  export const dbService = getFirestore();
  
