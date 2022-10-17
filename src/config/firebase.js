import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCobETVP2VCZzGaX0CeUm7x7UaSg9WTlDk",
    authDomain: "react-crud-df.firebaseapp.com",
    projectId: "react-crud-df",
    storageBucket: "react-crud-df.appspot.com",
    messagingSenderId: "908603827245",
    appId: "1:908603827245:web:4da878da11cc74dda284a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;