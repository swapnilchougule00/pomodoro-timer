import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDoQpZuOWEjOQtYGbh43-GI9U8hz63cfYk",
  authDomain: "pomodoro-timer-989c3.firebaseapp.com",
  projectId: "pomodoro-timer-989c3",
  storageBucket: "pomodoro-timer-989c3.appspot.com",
  messagingSenderId: "1035586222515",
  appId: "1:1035586222515:web:f3e63081bb5650f7d3b3c6",
  measurementId: "G-S86QQB0QVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {app , analytics, auth}