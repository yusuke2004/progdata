// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBrUUBNP10SKdofz_M-lq3tSB0F9Hby2U0",
    authDomain: "geektwitter-yusuke.firebaseapp.com",
    projectId: "geektwitter-yusuke",
    storageBucket: "geektwitter-yusuke.firebasestorage.app",
    messagingSenderId: "590858377570",
    appId: "1:590858377570:web:82850e609a8f10fd10b43b",
    measurementId: "G-Y9FZYS9BX3"
  };

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)