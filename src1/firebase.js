import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQuYS-7KRjtF8S3Kgx8Q3zkSOEbpBSyfY",
  authDomain: "todolist-d59cf.firebaseapp.com",
  projectId: "todolist-d59cf",
  storageBucket: "todolist-d59cf.appspot.com",
  messagingSenderId: "590361329860",
  appId: "1:590361329860:web:965e06397ba7e14f104991",
  measurementId: "G-CXXWM9SP1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
