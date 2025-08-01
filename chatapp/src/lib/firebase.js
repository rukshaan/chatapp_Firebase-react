// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-e4a39.firebaseapp.com",
  projectId: "chatapp-e4a39",
  storageBucket: "chatapp-e4a39.firebasestorage.app",
  messagingSenderId: "283254210869",
  appId: "1:283254210869:web:3d6b21c5e69ba2f76bcc7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);