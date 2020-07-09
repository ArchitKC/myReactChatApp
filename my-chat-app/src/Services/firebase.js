import React from 'react';
import * as firebase from 'firebase';


 
  const firebaseConfig = {
    apiKey: "AIzaSyANME-CcNjxyCmDxP4UEB1AFnGJYFkEwJc",
    authDomain: "my-chat-app-29c3b.firebaseapp.com",
    databaseURL: "https://my-chat-app-29c3b.firebaseio.com",
    projectId: "my-chat-app-29c3b",
    storageBucket: "my-chat-app-29c3b.appspot.com",
    messagingSenderId: "235647807939",
    appId: "1:235647807939:web:e7ae9e8708c2ecb1aecd76",
    measurementId: "G-QZG19TP2ZK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

export default firebase;