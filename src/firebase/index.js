import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage"
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4kJt7rxL5iIFlkjSsBN0QjTLB0A0GGAg",
  authDomain: "myeducation-2a61d.firebaseapp.com",
  projectId: "myeducation-2a61d",
  storageBucket: "myeducation-2a61d.appspot.com",
  messagingSenderId: "886077075456",
  appId: "1:886077075456:web:f12f1c1f99da8e2b4d68e5",
  measurementId: "G-YT12QNY4WV"
};

if (!initializeApp.length) {
  initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage()