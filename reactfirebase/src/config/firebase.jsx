import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCB-1-v5bIM73nGxJ3ohs1DJj3tSEQLwoc",
  authDomain: "fir-course-46c72.firebaseapp.com",
  projectId: "fir-course-46c72",
  storageBucket: "fir-course-46c72.appspot.com",
  messagingSenderId: "574149183657",
  appId: "1:574149183657:web:f8f7765bb1ff7afb2441b8",
  measurementId: "G-96K8M1LS9T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage };
