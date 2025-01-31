import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-login-3157a.firebaseapp.com",
  projectId: "auth-login-3157a",
  storageBucket: "auth-login-3157a.firebasestorage.app",
  messagingSenderId: "301980871228",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-VE3KGTYPNX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
