import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSw2wFDNoQdwiLVSa1gpPc7wB6rg2Y-oU",
  authDomain: "teamtec-727df.firebaseapp.com",
  projectId: "teamtec-727df",
  storageBucket: "teamtec-727df.appspot.com",
  messagingSenderId: "622833003979",
  appId: "1:622833003979:web:46b306451dd0a941b15a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);