import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAX3CFN6w7eH9PcBQGJYHupRZl62DRiRc",
    authDomain: "rory-gilmore.firebaseapp.com",
    projectId: "rory-gilmore",
    storageBucket: "rory-gilmore.appspot.com",
    messagingSenderId: "303525390934",
    appId: "1:303525390934:web:add52bbbbf5a50a40929f7",
    measurementId: "G-283115BFYW"
}

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
