import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_DATABASE_URL,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyBcpTbKOUpmG9uNEdrKMC0ZkPIyTrFI4oU",
    authDomain: "blogs-f24cd.firebaseapp.com",
    projectId: "blogs-f24cd",
    storageBucket: "blogs-f24cd.appspot.com",
    messagingSenderId: "628334680016",
    appId: "1:628334680016:web:9a7520545cf0712c234bd5"
};

const app = initializeApp(firebaseConfig);


export default app



