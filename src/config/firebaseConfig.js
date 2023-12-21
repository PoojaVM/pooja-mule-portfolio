// Import the functions you need from the SDKs you are using
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3I6bzkCxSBss1sLXBKFTsym80NSmVnSs",
    authDomain: "pooja-mule-portfolio.firebaseapp.com",
    databaseURL: "https://pooja-mule-portfolio-default-rtdb.firebaseio.com",
    projectId: "pooja-mule-portfolio",
    storageBucket: "pooja-mule-portfolio.appspot.com",
    messagingSenderId: "153901252226",
    appId: "1:153901252226:web:77e66fcb6f1339d3d43e9b",
    //measurementId: "G-QNQ5QN9BBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;
