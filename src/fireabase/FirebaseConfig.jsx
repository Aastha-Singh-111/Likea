// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
// apiKey: "AIzaSyBc583G4feSj99fMKMfqRCi010o5Fi4Zh0",
//   authDomain: "ecommerce-1-cfc2b.firebaseapp.com",
//   projectId: "ecommerce-1-cfc2b",
//   storageBucket: "ecommerce-1-cfc2b.appspot.com",
//   messagingSenderId: "174110963306",
//   appId: "1:174110963306:web:7438a435ca45ea1cacfc13"

apiKey: "AIzaSyB2Sq2chNpi-V0AEO8I0hBhiA-0F0LQd60",
  authDomain: "likea-47ca0.firebaseapp.com",
  projectId: "likea-47ca0",
  storageBucket: "likea-47ca0.appspot.com",
  messagingSenderId: "611119020022",
  appId: "1:611119020022:web:ac33e21da4b6156e6ab9d7",
  measurementId: "G-PHRRKC0MRG"

};


// Initialize Firebase 
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}