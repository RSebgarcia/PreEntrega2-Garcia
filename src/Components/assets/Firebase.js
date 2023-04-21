import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDF9qvzilUib4iWRuAwrNCcjC7hEuEJLIY",
    authDomain: "dragons-den-54d4d.firebaseapp.com",
    projectId: "dragons-den-54d4d",
    storageBucket: "dragons-den-54d4d.appspot.com",
    messagingSenderId: "392509130415",
    appId: "1:392509130415:web:e6e389952f675ad2ce365a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);