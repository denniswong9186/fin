// I copy this part of code from Google Firebase directly.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL-EMVs7m6blKhMeOYzAmgtExw6-NjMkI",
  authDomain: "financial-planning-9148.firebaseapp.com",
  projectId: "financial-planning-9148",
  storageBucket: "financial-planning-9148.appspot.com",
  messagingSenderId: "264020342842",
  appId: "1:264020342842:web:20b7ef2ebed10ca2ce9d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);