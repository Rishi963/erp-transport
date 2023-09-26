// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFWOdp4nsN68jFd0bbLqvLkeoBJl4TsXg",
  authDomain: "dz-erp.firebaseapp.com",
  projectId: "dz-erp",
  storageBucket: "dz-erp.appspot.com",
  messagingSenderId: "51961398020",
  appId: "1:51961398020:web:a6f8f8cc8e8ffb75d74651"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)