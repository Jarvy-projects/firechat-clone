import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlacMM-Icnz58prtwTOzLsPZIjSlDZHsI",
    authDomain: "firechat-5d878.firebaseapp.com",
    projectId: "firechat-5d878",
    storageBucket: "firechat-5d878.appspot.com",
    messagingSenderId: "287201486698",
    appId: "1:287201486698:web:682ab62b2be9d5a0d7e713",
    measurementId: "G-PKD18P07KC"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }