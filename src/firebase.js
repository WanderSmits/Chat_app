import firebase from "firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6rnWFhQzXxLbDOicdrG5t0VOdDXAxLLk",
  authDomain: "chatapp-5caa8.firebaseapp.com",
  databaseURL: "https://chatapp-5caa8.firebaseio.com",
  projectId: "chatapp-5caa8",
  storageBucket: "chatapp-5caa8.appspot.com",
  messagingSenderId: "593989010104",
  appId: "1:593989010104:web:42a990b69f6ef126a4aa4d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
