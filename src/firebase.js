// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lost-and-found-app-454b3.firebaseapp.com",
  projectId: "lost-and-found-app-454b3",
  storageBucket: "lost-and-found-app-454b3.appspot.com",
  messagingSenderId: "492206766615",
  appId: "1:492206766615:web:4feb8afb6a9539f7277a52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
