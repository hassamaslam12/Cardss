import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAXkErAgPvvi7KblbOd63kYMU7ucJr0eMI",
  authDomain: "react-e0941.firebaseapp.com",
  projectId: "react-e0941",
  storageBucket: "react-e0941.appspot.com",
  messagingSenderId: "958425569111",
  appId: "1:958425569111:web:05addf7b34272463c01012"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




export {
    auth
}