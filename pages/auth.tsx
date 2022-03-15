import React from "react";
import firebase from "../firebase/clientApp";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const provider = new GithubAuthProvider();
provider.addScope("repo");
provider.setCustomParameters({
    "allow_signup": "false"
})
const auth = getAuth();

signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        const user = result.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GithubAuthProvider.credentialFromError(error)
    })

const SignInScreen = () => {
    return <div>
        <h1>Log-in</h1>

    </div>
}