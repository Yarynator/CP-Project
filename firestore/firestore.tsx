import React from "react";
import { initializeApp } from "firebase/app";
import { getDocs, addDoc, collection, getFirestore, DocumentReference } from "firebase/firestore";
import { v4 as uuid } from "uuid";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyB9Z_yYUhm8ayl5D_K8UlNdGkVjcIY4ZjA",
    authDomain: "scoutreservator.firebaseapp.com",
    projectId: "scoutreservator",
    storageBucket: "scoutreservator.appspot.com",
    messagingSenderId: "260050979498",
    appId: "1:260050979498:web:f33e8ad86aab9e33565ed3",
    measurementId: "G-NMZDXJXQ0F"
});

const db = getFirestore();

export type User = {
    ID: number,
    name: String,
    nickname?: String,
    surname: String,
    email: String,
    password: String,
    clubhouses: Array<number>,
    favourites: Array<number>
}

export const AddUser= async (user: User) => {
    
    /*db.collection("Users").add({
        name: "Hynek",
        surname: "Vaclavik",
        email: "randommail@bezvamail.cz"
    });*/

    let myuuid = uuid();

    try {
        const docRef = await addDoc(collection(db, "Users"), {
            ID: myuuid,
            name: user.name,
            nickname: user.nickname,
            surname: user.surname,
            password: user.password,
            email: user.email,
            clubhouses: user.clubhouses,
            favourites: user.favourites
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const GetUsers = async () => {

    const users = [];

    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        //console.log(`${doc.id} => ${doc.data()}`);
        users.push(doc.data);
    });

    return await users;
}