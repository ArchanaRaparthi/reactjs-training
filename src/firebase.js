import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo7hvp5CHK1TMu4bxCMx7F6yiJSuC6Tqs",
  authDomain: "archana-9a54e.firebaseapp.com",
  projectId: "archana-9a54e",
  storageBucket: "archana-9a54e.appspot.com",
  messagingSenderId: "1096745195033",
  appId: "1:1096745195033:web:efbda43c7fef43e6727c88",
  measurementId: "G-YEN2H9W8YT",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = firebase.firestore();

export default firebase;
