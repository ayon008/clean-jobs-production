// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIqBtt0-Z-PfjRnVjPfi39z0lCSBy6hDE",
    authDomain: "clean-jobs-37bad.firebaseapp.com",
    projectId: "clean-jobs-37bad",
    storageBucket: "clean-jobs-37bad.appspot.com",
    messagingSenderId: "891859437887",
    appId: "1:891859437887:web:68df63d8e37a48e0dd6b8a",
    measurementId: "G-Q1VJZMYTLJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };