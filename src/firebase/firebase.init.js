// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAttf4rja3GfCSq_cn4XND1yrB5z8lT-VI",
  authDomain: "coffee-store-9394b.firebaseapp.com",
  projectId: "coffee-store-9394b",
  storageBucket: "coffee-store-9394b.firebasestorage.app",
  messagingSenderId: "105680795708",
  appId: "1:105680795708:web:83a27b09b5eac04eecab39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
