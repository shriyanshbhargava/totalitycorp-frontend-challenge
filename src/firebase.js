// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg3jHJL3hJqxwkFRj_U0HBwwC-aI6-iD0",
  authDomain: "react-auth-4f4a9.firebaseapp.com",
  projectId: "react-auth-4f4a9",
  storageBucket: "react-auth-4f4a9.appspot.com",
  messagingSenderId: "903315449197",
  appId: "1:903315449197:web:17bc954704cd17617aa664",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initilize Firebase Auth.
export const auth = getAuth(app);
