// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALagyvsA792mYjUsJ8qVSxmwP8Qx3TNs8",
  authDomain: "e-shop-project-42c83.firebaseapp.com",
  projectId: "e-shop-project-42c83",
  storageBucket: "e-shop-project-42c83.appspot.com",
  messagingSenderId: "1043557991217",
  appId: "1:1043557991217:web:0f87b9ecd3753aabf86610"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;