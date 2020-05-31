import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9QCm6rLRKvZIbygFHLwma9M9izc3hIAA",
    authDomain: "diva-mafia-db.firebaseapp.com",
    databaseURL: "https://diva-mafia-db.firebaseio.com",
    projectId: "diva-mafia-db",
    storageBucket: "diva-mafia-db.appspot.com",
    messagingSenderId: "1076092836064",
    appId: "1:1076092836064:web:9eccfa34841713f6689885",
    measurementId: "G-DFCVX8NQ1X"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;