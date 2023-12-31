import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "",
    authDomain: "notes-app-aadcc.firebaseapp.com",
    projectId: "notes-app-aadcc",
    storageBucket: "notes-app-aadcc.appspot.com",
    messagingSenderId: "544225863562",
    appId: "1:544225863562:web:89b0856069879819090a73",
    measurementId: "G-RX3N5CCRGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')