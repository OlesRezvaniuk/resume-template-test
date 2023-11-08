// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl7ahEHmpA_etK150q2dEdY0v5uMZnssw",
  authDomain: "resume-template-90624.firebaseapp.com",
  projectId: "resume-template-90624",
  storageBucket: "resume-template-90624.appspot.com",
  messagingSenderId: "500645542573",
  appId: "1:500645542573:web:c17244b9e4a830e6ade424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();

export const firebaseExports = { app, storage, auth };
