import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Add the Firebase products that you want to use

var firebaseConfig = {
  apiKey: "AIzaSyCDPfycy4wz-Tz2Xm085gTVhR3bE2aanZ0",

  authDomain: "devs4change-51d11.firebaseapp.com",

  projectId: "devs4change-51d11",

  storageBucket: "devs4change-51d11.appspot.com",

  messagingSenderId: "924669087387",

  appId: "1:924669087387:web:a81154f6bfdf4f4153803e",

  measurementId: "G-SZ0R0RFYX0",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
