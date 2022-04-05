import { useState } from "react";
import styles from "../styles/Menu.module.css";
import styled from "styled-components";
import Link from "next/link";
import { AddUser } from "../firestore/firestore";
import { User } from "../serverApi/queries/users";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { useUsersQuery } from "../generated/graphql";

const Required = styled.span`
    color: red;
`;

const AuthDiv = styled.div`
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

const Warning = styled.div`
    color: red;
`;

function createInputField(idName: string, name: string, placeholder: string, required: boolean, type: string)
{
    return <>
    <InputField><Nazev htmlFor={idName}>{name}{required ? <Required>*</Required> : ""}: </Nazev><Pole id={idName} name={idName} type={type} placeholder={placeholder}/></InputField>
    </>
}

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");

    const {loading, data, error} = useUsersQuery();

    const router = useRouter();

    return <>
    <AuthDiv>
        <Title>Login</Title>
        <InputField>
            <Nazev htmlFor="email">E-mail <Required>*</Required></Nazev>
            <Pole id="email" type="text" placeholder="karelklima@bezvamail.cz" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </InputField>
        <InputField>
            <Nazev htmlFor="password">Heslo <Required>*</Required></Nazev>
            <Pole id="password" type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </InputField>
        <Warning>{warning}</Warning>
        <Submit type="submit" value="Přihlásit se" onClick={() => {
            {
                
                let validace = true;

                if(email.length === 0 || password.length === 0)
                    validace = false;
    
                if(validace) {
                    localStorage.setItem("user", "Yarynator");

                    let found = false;
                    let id = "";
                    let name = "";
                    let surname = "";
                    let nickname = "";
                    let dbPass = "";

                    data?.users.map(e => {
                        if(!found){
                            if(email === e.email)
                            {
                                found = true;
                                id = e.ID;
                                name = e.name;
                                surname = e.surname;
                                nickname = e.nickname ? e.nickname : "";
                                dbPass = e.password;
                            }
                        }   
                    });

                    if(found)
                    {
                        if(password === dbPass) {
                            sessionStorage.setItem("ID", id);
                            sessionStorage.setItem("name", name);
                            sessionStorage.setItem("surname", surname);
                            sessionStorage.setItem("nickname", nickname);
                            sessionStorage.setItem("email", email);

                            setWarning("");
                    
                            router.push(router.route);
                        } else {
                            setWarning("Špatné heslo");
                        }
                    } else {
                        setWarning("Špatný email")
                    }
                    
                    //router.push(router.route);
                }
                else{
                    setWarning("Musis zadat vsecny povinne hodnoty");
                }
            }
        }}/>
    </AuthDiv>
    
    </>;
};

export const Register = () => {

    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [warning, setWarning] = useState("");

    return <>

    
    <AuthDiv>
        <Title>Register</Title>
        <InputField>
            <Nazev htmlFor="name">Jméno <Required>*</Required></Nazev>
            <Pole id="name" type="text" placeholder="Karel" value={name} onChange={(e) => setName(e.target.value)} required />
        </InputField>
        <InputField>
            <Nazev htmlFor="nickname">Přezdívka</Nazev>
            <Pole id="nickname" type="text" placeholder="Tank" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </InputField>
        <InputField>
            <Nazev htmlFor="surname">Příjmení <Required>*</Required></Nazev>
            <Pole id="surname" type="text" placeholder="Klíma" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </InputField>
        <InputField>
            <Nazev htmlFor="email">E-mail <Required>*</Required></Nazev>
            <Pole id="email" type="text" placeholder="karelklima@bezvamail.cz" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </InputField>
        <InputField>
            <Nazev htmlFor="password">Heslo <Required>*</Required></Nazev>
            <Pole id="password" type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </InputField>
        <InputField>
            <Nazev htmlFor="passwordAgain">Heslo znovu <Required>*</Required></Nazev>
            <Pole id="passwordAgain" type="password" placeholder="Heslo znovu" value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} required />
        </InputField>
        <Warning>{warning}</Warning>
        <Submit type="submit" value="Zaregistrovat se" onClick={
        () => {
            
            let validace = true;

            if(name.length === 0 || surname.length === 0 || email.length === 0 || password.length === 0 || passwordAgain.length === 0)
                validace = false;

            if(validace)
            {
                if(password === passwordAgain) {
                    let myuuid = uuid();

                    const user : User = {
                        ID: myuuid,
                        name: name,
                        nickname: nickname,
                        surname: surname,
                        email: email,
                        password: password,
                        clubhouses: [],
                        favourites: []
                    }

                    AddUser(user);

                    setName("");
                    setNickname("");
                    setSurname("");
                    setEmail("");
                    setPassword("");
                    setPasswordAgain("");
                } else {
                    setWarning("Hesla se musi shodovat");
                }
            }
            else{
                setWarning("Musis zadat vsecny povinne hodnoty");
            }
            
        }}/>
    </AuthDiv>
    </>;
};