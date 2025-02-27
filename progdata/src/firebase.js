import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHOqwgLKgf94QTXMfxKXuas8YM_9coQbY",
  authDomain: "prog-fb9ef.firebaseapp.com",
  projectId: "prog-fb9ef",
  storageBucket: "prog-fb9ef.firebasestorage.app",
  messagingSenderId: "182782120571",
  appId: "1:182782120571:web:d38c013cfb82b4a48ec8de",
  measurementId: "G-1ZCNFQRZ2J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();