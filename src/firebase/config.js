import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

import { getFirestore, FieldValue } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCziwPpSQmWSGPsRPBUhtkR5FGIwEpIXTQ",
    authDomain: "photo-share-b76a7.firebaseapp.com",
    projectId: "photo-share-b76a7",
    storageBucket: "photo-share-b76a7.appspot.com",
    messagingSenderId: "415384458317",
    appId: "1:415384458317:web:329bdd542419692510f804",
};
console.log(firebase.firestore);
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();
// const timestamp = FieldValue.serverTimestamp;
// const timestamp = () => FieldValue.serverTimestamp;
const timestamp = Date.now();
export { projectStorage, projectFirestore, timestamp };
