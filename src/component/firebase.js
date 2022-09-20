
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB65EAFaCPA7VtQZ5jG7RJSFjMzLwDIyeg",
  authDomain: "agencia-d73e3.firebaseapp.com",
  projectId: "agencia-d73e3",
  storageBucket: "agencia-d73e3.appspot.com",
  messagingSenderId: "798969681763",
  appId: "1:798969681763:web:0554cbc2611e5f65eea556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db