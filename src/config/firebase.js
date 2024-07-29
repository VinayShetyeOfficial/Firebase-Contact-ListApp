// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn1z1nrPXO6sXZ9HXWDL4MCIDJJXsglB4",
  authDomain: "vite-contact-4d649.firebaseapp.com",
  projectId: "vite-contact-4d649",
  storageBucket: "vite-contact-4d649.appspot.com",
  messagingSenderId: "664528442622",
  appId: "1:664528442622:web:a6e60235716a51235f01af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
