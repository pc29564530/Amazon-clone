import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZsZjl82Zas1gXjrzrm6JAqaYBDhPmGr8",
  authDomain: "clone-2ab30.firebaseapp.com",
  databaseURL: "https://clone-2ab30.firebaseio.com",
  projectId: "clone-2ab30",
  storageBucket: "clone-2ab30.appspot.com",
  messagingSenderId: "487358234695",
  appId: "1:487358234695:web:0885e26bf43b29ae533162",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
