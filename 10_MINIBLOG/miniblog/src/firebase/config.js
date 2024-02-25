import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDmYiT6CZyM4WEnwpJDJentGCAkSA6TtGE",
  authDomain: "gabrielblog-ca710.firebaseapp.com",
  projectId: "gabrielblog-ca710",
  storageBucket: "gabrielblog-ca710.appspot.com",
  messagingSenderId: "244761131697",
  appId: "1:244761131697:web:d2e43cffcc00d40c17c090",
  measurementId: "G-ETR6TGWNKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db} ;