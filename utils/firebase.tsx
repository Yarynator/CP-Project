import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB9Z_yYUhm8ayl5D_K8UlNdGkVjcIY4ZjA",
    authDomain: "scoutreservator.firebaseapp.com",
    projectId: "scoutreservator",
    storageBucket: "scoutreservator.appspot.com",
    messagingSenderId: "260050979498",
    appId: "1:260050979498:web:f33e8ad86aab9e33565ed3",
    measurementId: "G-NMZDXJXQ0F"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export {firestore};