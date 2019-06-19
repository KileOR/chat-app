import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBOYYHwQIS4qvoioiti-ifKFJeTgCZw0ow",
  authDomain: "chat-app-332ec.firebaseapp.com",
  databaseURL: "https://chat-app-332ec.firebaseio.com",
  projectId: "chat-app-332ec",
  storageBucket: "chat-app-332ec.appspot.com",
  messagingSenderId: "511406906407",
  appId: "1:511406906407:web:7f95470afbdd392b"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
