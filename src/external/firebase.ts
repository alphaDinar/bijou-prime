import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyAephpMrSxkaspdpPQz6PWkQZ9Wr18WuMs",
  authDomain: "atlashosting-e809d.firebaseapp.com",
  projectId: "atlashosting-e809d",
  storageBucket: "atlashosting-e809d.firebasestorage.app",
  messagingSenderId: "86112040141",
  appId: "1:86112040141:web:53e4cd7c041f966b4c6584",
  measurementId: "G-CQWN4M943R"
};

const app = initializeApp(firebaseConfig);
// export const fireAuth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
export const fireStoreDB = getFirestore(app);
// export const storageDB = getStorage(app);
// export const firePerform = getPerformance(app);

console.log('firebase');