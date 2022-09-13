import { getFirestore } from 'firebase/firestore';
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_APKI_KEY_FIREBASE,
    authDomain: "libritienda.firebaseapp.com",
    projectId: "libritienda",
    storageBucket: "libritienda.appspot.com",
    messagingSenderId: "189027802268",
    appId: "1:189027802268:web:29d0778fef1efb91dbe159"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


export const DB = getFirestore(app);