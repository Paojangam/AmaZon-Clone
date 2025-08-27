// Import modular Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCmTdG6yTcQKbfHSLtbasSzSMUjjWtcPVI",
  authDomain: "clone-a56ed.firebaseapp.com",
  projectId: "clone-a56ed",
  storageBucket: "clone-a56ed.firebasestorage.app",
  messagingSenderId: "75992540861",
  appId: "1:75992540861:web:bee99dd2d3328e810eb9d4",
  measurementId: "G-3P22XJKXV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export the services
export { auth, db };
