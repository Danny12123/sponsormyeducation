import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/storage"
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyD8P1Hl0mnCH8B7LkcoCQ2Hf2CueAQyoB8",
//   authDomain: "try2-edc31.firebaseapp.com",
//   projectId: "try2-edc31",
//   storageBucket: "try2-edc31.appspot.com",
//   messagingSenderId: "947272246400",
//   appId: "1:947272246400:web:f3bc8c16eac3c4abfe7265",
//   measurementId: "G-B8PE19QFVM"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCLY2LS7XkyeDFV_3ADAexonk_T_UeSL3w",
  authDomain: "gofundme-5e71d.firebaseapp.com",
  projectId: "gofundme-5e71d",
  storageBucket: "gofundme-5e71d.appspot.com",
  messagingSenderId: "354991817310",
  appId: "1:354991817310:web:13077edbf8d5b2ac10aacf",
  measurementId: "G-J5QY0C1DM8"
};

if (!initializeApp.length) {
  initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage()