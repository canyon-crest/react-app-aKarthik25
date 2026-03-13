// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from  "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRnUuNAGB8bpkoipwUOEXrHD3lLkXvBsg",
  authDomain: "react-firebase-app-8c858.firebaseapp.com",
  projectId: "react-firebase-app-8c858",
  storageBucket: "react-firebase-app-8c858.firebasestorage.app",
  messagingSenderId: "288021065288",
  appId: "1:288021065288:web:4158c6b16f49fd86d2b27d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();