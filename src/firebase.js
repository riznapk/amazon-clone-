import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-1flhQ39asHjxvVy4yVlxcpKXypkSA9k",
  authDomain: "clone-45656.firebaseapp.com",
  projectId: "clone-45656",
  storageBucket: "clone-45656.appspot.com",
  messagingSenderId: "792961421937",
  appId: "1:792961421937:web:6decf5740497c44c3e01d0",
  measurementId: "G-VQWGXB0MVH",
});


const auth = firebase.auth();

export {  auth };
