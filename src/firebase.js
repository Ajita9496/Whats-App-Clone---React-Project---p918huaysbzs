import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRvu7kRg930ZpZkwHi7F7p8HmOa4-Bqjw",
  authDomain: "whatsapp-clone-5b002.firebaseapp.com",
  projectId: "whatsapp-clone-5b002",
  storageBucket: "whatsapp-clone-5b002.appspot.com",
  messagingSenderId: "937264733238",
  appId: "1:937264733238:web:1065c5795ae4910ba5cc97",
  measurementId: "G-KG1K2WR73Z",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
