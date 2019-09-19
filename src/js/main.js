const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyD7npIh5V04loM_t7pemXGZOTCGkWQb7dQ",
    authDomain: "machine-problems.firebaseapp.com",
    databaseURL: "https://machine-problems.firebaseio.com",
    projectId: "machine-problems",
    storageBucket: "machine-problems.appspot.com",
    messagingSenderId: "598061010448",
    appId: "1:598061010448:web:691ac551daed66bc978495"
});

const db = firebase.firestore();

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        
    }, false);
});