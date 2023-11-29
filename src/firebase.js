import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANdwU90g6Q2XKs1AGZwpG9JrGyerNyMaY",
  authDomain: "login-6edee.firebaseapp.com",
  projectId: "login-6edee",
  storageBucket: "login-6edee.appspot.com",
  messagingSenderId: "812888934452",
  appId: "1:812888934452:web:c137a162263ec77c3e6261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider};