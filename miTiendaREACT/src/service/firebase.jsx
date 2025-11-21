// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOrqJVC16_F9-cHj5sbn6piiBpgro6rfw",
    authDomain: "after-work-store.firebaseapp.com",
    projectId: "after-work-store",
    storageBucket: "after-work-store.firebasestorage.app",
    messagingSenderId: "440099939029",
    appId: "1:440099939029:web:e9e8c88991bbb905ebf85c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)