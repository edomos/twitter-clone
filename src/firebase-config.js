// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4-uugQHcP06lq_iqdFynrgquwyCfOXjs",
  authDomain: "twitter-clone-abe6d.firebaseapp.com",
  projectId: "twitter-clone-abe6d",
  storageBucket: "twitter-clone-abe6d.appspot.com",
  messagingSenderId: "677248913601",
  appId: "1:677248913601:web:9096ff11babde2308fc440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//database
export const db = getFirestore();