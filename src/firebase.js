import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADMN6DRT3QyvuAFFRMQSjAe-2TEDrqKCs",
  authDomain: "blog-fe77b.firebaseapp.com",
  projectId: "blog-fe77b",
  storageBucket: "blog-fe77b.appspot.com",
  messagingSenderId: "166597357256",
  appId: "1:166597357256:web:0b8dfd17d72abeba23fffd",
  measurementId: "G-JSZNGDPBSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {analytics, auth, provider, db};
