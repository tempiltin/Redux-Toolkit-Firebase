import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDeT8SaecnzyTnB4WzemnbnOPzQVcPUgAQ",
    authDomain: "multimart-56ce6.firebaseapp.com",
    projectId: "multimart-56ce6",
    storageBucket: "multimart-56ce6.appspot.com",
    messagingSenderId: "880491719430",
    appId: "1:880491719430:web:eddd60af29c3ce824e8c87"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
export default app;