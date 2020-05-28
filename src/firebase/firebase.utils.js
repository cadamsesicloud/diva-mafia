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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;