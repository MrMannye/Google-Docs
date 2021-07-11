import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCc3V0HXOGb8f_s-ghyp3zEPzuXzEkaSc8",
    authDomain: "docs-1ed0b.firebaseapp.com",
    projectId: "docs-1ed0b",
    storageBucket: "docs-1ed0b.appspot.com",
    messagingSenderId: "169376827592",
    appId: "1:169376827592:web:48b5cc9d97bde04eec7dfd",
};

const app = !firebase.apps.length 
? firebase.initializeApp (firebaseConfig) 
: firebase.app();

const db = app.firestore(); 

export { db };