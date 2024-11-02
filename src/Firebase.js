import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNxwBJKe1W32F1JfP6ToQlfrGsj4zSR00",
  authDomain: "doctor-app-b524c.firebaseapp.com",
  projectId: "doctor-app-b524c",
  storageBucket: "doctor-app-b524c.firebasestorage.app",
  messagingSenderId: "912788888605",
  appId: "1:912788888605:web:805b0c2d2df96fd4c03af4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


