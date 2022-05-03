import React from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getDocs, addDoc, collection, getFirestore, DocumentReference, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { User } from "../serverApi/queries/users";
import { Clubhouse } from "../serverApi/queries/clubhouses";
import * as admin from "firebase-admin";

export const firebase = initializeApp({
    apiKey: "AIzaSyB9Z_yYUhm8ayl5D_K8UlNdGkVjcIY4ZjA",
    authDomain: "scoutreservator.firebaseapp.com",
    projectId: "scoutreservator",
    storageBucket: "scoutreservator.appspot.com",
    messagingSenderId: "260050979498",
    appId: "1:260050979498:web:f33e8ad86aab9e33565ed3",
    measurementId: "G-NMZDXJXQ0F"
});

const db = getFirestore();

export const getApp = () => {
    return admin.instanceId;
} 


export const AddUser= async (user: User) => {
    
    /*db.collection("Users").add({
        name: "Hynek",
        surname: "Vaclavik",
        email: "randommail@bezvamail.cz"
    });*/

    try {
        const docRef = await addDoc(collection(db, "Users"), {
            ID: user.ID,
            name: user.name,
            nickname: user.nickname === "" ? null : user.nickname,
            surname: user.surname,
            clubhouses: user.clubhouses,
            favourites: user.favourites
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const GetUsers = async () => {

    const users : any = [];

    const querySnapshot = await getDocs(collection(db, "Users"));

    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });
    return await users;
}

export const AddClubhouse = async (clubhouse: Clubhouse) => {

    try {
        const docRef = await addDoc(collection(db, "Clubhouses"), {
            ID: clubhouse.ID,
            name: clubhouse.name,
            img: clubhouse.img,
            description: clubhouse.description,
            web: clubhouse.web,
            street: clubhouse.street,
            city: clubhouse.city,
            zip: clubhouse.zip,
            admins: clubhouse.admins
        });
        console.log("Document written with ID: ", docRef.id);
    } catch(e) {
        console.error("Error adding document: ", e);
    }
}

export const GetClubhouses = async () => {
    const clubhouses : any = [];

    const querySnapshot = await getDocs(collection(db, "Clubhouses"));

    querySnapshot.forEach((doc) => {
        clubhouses.push(doc.data());
    })

    return await clubhouses;
}