// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCray2ZxpD8raF6ySFzjlMfTLbXJHzGesY',
    authDomain: 'todoapp-2cad2.firebaseapp.com',
    projectId: 'todoapp-2cad2',
    storageBucket: 'todoapp-2cad2.appspot.com',
    messagingSenderId: '85466067733',
    appId: '1:85466067733:web:474ecc3648f7bc5db8ef1c',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
