// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACPUcxIXKle2dsntzIo-1cnuvXNDM2zxg",
    authDomain: "clean-jobs-production.firebaseapp.com",
    projectId: "clean-jobs-production",
    storageBucket: "clean-jobs-production.appspot.com",
    messagingSenderId: "42988735499",
    appId: "1:42988735499:web:660ea72b34dbd6004fcb0e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const database = getDatabase(app);

const subscribeToNewBlog = (callback) => {
    const blogsRef = ref(database, 'blogs');
    onValue(blogsRef, (snapshot) => {
        callback(snapshot.val());
    });
};

export { app, storage, db, subscribeToNewBlog };