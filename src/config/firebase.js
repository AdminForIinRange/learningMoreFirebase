// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWDD28fd5JqULc2HwDHNhcsYnMc5ZYXi0",
    authDomain: "booklist-af099.firebaseapp.com",
    projectId: "booklist-af099",
    storageBucket: "booklist-af099.appspot.com",
    messagingSenderId: "613454526038",
    appId: "1:613454526038:web:b236fd2846aace50722df7"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app);

