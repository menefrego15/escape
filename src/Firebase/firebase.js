import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw9h94HQ8DJ_opZLHdFthHuo1xVxeHwmI",
  authDomain: "escape-82f70.firebaseapp.com",
  projectId: "escape-82f70",
  storageBucket: "escape-82f70.appspot.com",
  messagingSenderId: "134309343516",
  appId: "1:134309343516:web:fdbaafcc3159974e6d0ad9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {})
    .catch((error) => {
      console.log(error.message);
    });
};

export default firebase;
