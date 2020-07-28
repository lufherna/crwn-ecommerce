import firebase from 'firebase/app'
// firebase has all the utils libraries when we include
// the dependency
// we always need the base keyword (firebase)
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDi9q2Xcku2ZwwAKGM57uY4HB3CqkisBo8",
    authDomain: "crwn-db-5b4f3.firebaseapp.com",
    databaseURL: "https://crwn-db-5b4f3.firebaseio.com",
    projectId: "crwn-db-5b4f3",
    storageBucket: "crwn-db-5b4f3.appspot.com",
    messagingSenderId: "731287933154",
    appId: "1:731287933154:web:def5a5353d2821d5df4ebb",
    measurementId: "G-CEZ7MV222J"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
