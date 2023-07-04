import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA5E4VgTDkubv7JcFe-0GQ4WV0mbZqUhEY",
  authDomain: "hotstar-clone-553b2.firebaseapp.com",
  projectId: "hotstar-clone-553b2",
  storageBucket: "hotstar-clone-553b2.appspot.com",
  messagingSenderId: "755807523947",
  appId: "1:755807523947:web:4f64c037ce7331eea9cd2e",
  measurementId: "G-CY2CH8DPV1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db