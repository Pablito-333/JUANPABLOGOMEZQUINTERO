// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy3G5RUSL-52qIKfjzlv18ovYsVEeJY9M",
  authDomain: "free-chair-23936.firebaseapp.com",
  projectId: "free-chair-23936",
  storageBucket: "free-chair-23936.firebasestorage.app",
  messagingSenderId: "724699319546",
  appId: "1:724699319546:web:41837f09e587ca39f9cd43",
  measurementId: "G-ZCVKFQ55GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);