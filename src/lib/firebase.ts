import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // untuk Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyCWfrn7tn5U8o-cM8_2JCuSY7nPiIhsHOk",
  authDomain: "q03udv-46c20.firebaseapp.com",
  databaseURL: "https://q03udv-46c20-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "q03udv-46c20",
  storageBucket: "q03udv-46c20.firebasestorage.app",
  messagingSenderId: "491829314700",
  appId: "1:491829314700:web:d8cad5567ad676989467a9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
