// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUt94WZpkjooF9dqb4h4sD8MSk5OfrMqY",
  authDomain: "netflixgpt-5555e.firebaseapp.com",
  projectId: "netflixgpt-5555e",
  storageBucket: "netflixgpt-5555e.appspot.com",
  messagingSenderId: "161083353494",
  appId: "1:161083353494:web:2fc44203f2b3367c74d5b7",
  measurementId: "G-C4HL32QQYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
