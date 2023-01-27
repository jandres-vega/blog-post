import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDpww2KxG-q1WxXYUc7MyQNtOR_7zO9bIE",
    authDomain: "blog-post-337c5.firebaseapp.com",
    projectId: "blog-post-337c5",
    storageBucket: "blog-post-337c5.appspot.com",
    messagingSenderId: "705185905650",
    appId: "1:705185905650:web:bd7a4c0fddaa35588ec96b",
    measurementId: "G-80751QVBFH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);