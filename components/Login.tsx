import { useState } from "react";
import styles from "../styles/Menu.module.css";
import styled from "styled-components";
import Link from "next/link";
import { AddUser, GetUsers } from "../firestore/firestore";

const Required = styled.span`
    color: red;
`;

const AuthDiv = styled.form`
    background-color:  #BDD4DF;
    padding: 1rem;
    border: solid 1px #657F6F;
    border-radius: 1rem;

    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
`;

const Title = styled.h5`
    color: #657F6F;
`;

const InputField = styled.p`
    margin: 5px;
    display: flex;
    align-items: center;
`;

const Nazev = styled.label`
    width: 150px;
    display: block;
    float: left;
    text-align: right;
    padding-right: 1rem;
`;

const Pole = styled.input`
    width: 300px;
    padding: .5rem;
    border-radius: .7rem;
    border: solid 1px #657F6F;
`;

const Submit = styled.input`
    margin: 1rem auto;
    background-color: #87A1AE;
    border: solid 1px #657F6F;
    border-radius: 1rem;
    padding: 1rem;
`;

function createInputField(idName: string, name: string, placeholder: string, required: boolean, type: string)
{
    return <>
    <InputField><Nazev htmlFor={idName}>{name}{required ? <Required>*</Required> : ""}: </Nazev><Pole id={idName} name={idName} type={type} placeholder={placeholder}/></InputField>
    </>
}

export const Login = () => {
    return <>
    <AuthDiv>
        <Title>Login</Title>
        {createInputField("email", "E-mail", "karelklima@bezvamail.cz", true, "text")}
        {createInputField("password", "Heslo", "Heslo", true, "password")}
        <Link href="mojeKlubovna"><Submit type="submit" value="Přihlásit se"/></Link>
    </AuthDiv>
    
    </>;
};

export const Register = () => {
    return <>
    
    <AuthDiv onSubmit={(e) => {
            e.preventDefault(); 
            GetUsers();
        }}>
        <Title>Register</Title>
        {createInputField("name", "Jméno", "Karel", true, "text")}
        {createInputField("nickname", "Přezdívka", "Tank", false, "text")}
        {createInputField("surname", "Příjmení", "Klíma", true, "text")}
        {createInputField("email", "E-mail", "karelklima@bezvamail.cz", true, "text")}
        {createInputField("password", "Heslo", "Heslo", true, "password")}
        {createInputField("passwordAgain", "Heslo znovu", "Heslo znovu", true, "password")}
        <Submit type="submit" value="Zaregistrovat se" />
    </AuthDiv>
    </>;
};