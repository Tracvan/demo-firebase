// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGCE5UWL3HuEeadiv4CfKeWs6sOXS3bQ4",
    authDomain: "test-d8b2b.firebaseapp.com",
    projectId: "test-d8b2b",
    storageBucket: "test-d8b2b.appspot.com",
    messagingSenderId: "1088789363620",
    appId: "1:1088789363620:web:2b44443691d49aaf5e9f31",
    measurementId: "G-F1G05QV7L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)