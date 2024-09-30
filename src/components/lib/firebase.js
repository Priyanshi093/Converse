// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "converse-chatapp-e73a7.firebaseapp.com",
  projectId: "converse-chatapp-e73a7",
  storageBucket: "converse-chatapp-e73a7.appspot.com",
  messagingSenderId: "836135096590",
  appId: "1:836135096590:web:25133ad1be8b09a2c0475f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export authentication & firestore databse
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();