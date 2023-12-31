// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // <- needed for DB

import { getAuth } from "firebase/auth"; // <- needed for Auth

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAweWUw1qIRaJIg7V1yjZBB5pLHrHLTY_o",
  authDomain: "language-booking-system.firebaseapp.com",
  projectId: "language-booking-system",
  storageBucket: "language-booking-system.appspot.com",
  messagingSenderId: "943699491270",
  appId: "1:943699491270:web:add554406c028a984d5ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app); // <- needed for Auth (later)
export { auth }

export const db = getFirestore(app); // <- needed for DB so we can use it in our application components