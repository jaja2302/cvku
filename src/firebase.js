import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPFUx7uTMGtS9NGuQPUgAqH0up7pm-V-Q",
  authDomain: "cvjaja-e0989.firebaseapp.com",
  projectId: "cvjaja-e0989",
  storageBucket: "cvjaja-e0989.appspot.com",
  messagingSenderId: "781658693117",
  appId: "1:781658693117:web:570c9ebc8d8227b4518d94",
  measurementId: "G-J2HQ6WCNRF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;