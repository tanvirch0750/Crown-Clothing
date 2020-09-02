import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEA2sTYoQnQW9MugK62ADOsM2X1zkqhc0",
  authDomain: "crown-db-722c5.firebaseapp.com",
  databaseURL: "https://crown-db-722c5.firebaseio.com",
  projectId: "crown-db-722c5",
  storageBucket: "crown-db-722c5.appspot.com",
  messagingSenderId: "473786379532",
  appId: "1:473786379532:web:8c5de9c7d6ee50370bad29",
  measurementId: "G-LN8N4QFP0S",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
