// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = import.meta.env.VITE_APIKEY;
const authDomain = import.meta.env.VITE_AUTHDOMAIN;
const projectId = import.meta.env.VITE_PROJECTID;
const storageBucket = import.meta.env.VITE_STORAGEBUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGINGSENDERID;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId: '1:85466067733:web:474ecc3648f7bc5db8ef1c',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
