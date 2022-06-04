// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjmA0iS3-DPaZJGN5cXUq3KykLP1OLqrM",
  authDomain: "simple-emajhon-recap.firebaseapp.com",
  projectId: "simple-emajhon-recap",
  storageBucket: "simple-emajhon-recap.appspot.com",
  messagingSenderId: "349546244736",
  appId: "1:349546244736:web:465a5d44b8c06f6c441465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;