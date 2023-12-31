// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1LMV5jdNFpYD-VxPR1OUEhBE7a4UvqCw",
  authDomain: "todo-app-81c0a.firebaseapp.com",
  projectId: "todo-app-81c0a",
  storageBucket: "todo-app-81c0a.appspot.com",
  messagingSenderId: "818551356156",
  appId: "1:818551356156:web:66baf4d1e312cba2ecb579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);