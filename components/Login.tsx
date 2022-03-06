import { useState } from "react";
import styles from "../styles/Menu.module.css";
import styled from "styled-components";

/*export const Login : React.FC = () => {

    const [loginClasses, setLoginClasses] = useState(`${styles.login} ${styles.invisible}`);

    return <>
    <p className={styles.logContainer} onClick={() => {
        if(loginClasses == `${styles.login} ${styles.visible}`){
            setLoginClasses(`${styles.login} ${styles.invisible}`)
        } else{
            setLoginClasses(`${styles.login} ${styles.visible}`);
        }
    }}>Login</p>

    <div className={loginClasses}>
        <h2 className={styles.close} onClick={() => setLoginClasses(`${styles.login} ${styles.invisible}`)}>×</h2>
        <h2>Login</h2>
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email"/><br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password"/><br />
        <button>Přihlásit se</button>
    </div>

    </>;
} 

export const Register : React.FC = () => {

    const [registerClasses, setRegisterClasses] = useState(`${styles.register} ${styles.invisible}`);

    return <><p className={styles.logContainer} onClick={() => {
        if(registerClasses == `${styles.register} ${styles.visible}`){
            setRegisterClasses(`${styles.register} ${styles.invisible}`)
        } else{
            setRegisterClasses(`${styles.register} ${styles.visible}`);
        }
    }}>Register</p>
    
    <div className={registerClasses}>
        <h2 className={styles.close} onClick={() => setRegisterClasses(`${styles.register} ${styles.invisible}`)}>×</h2>
        <h2>Register</h2>
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email"/><br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password"/><br />
        <button>Přihlásit se</button>
    </div>

    </>
}*/

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
    padding-right: 1rem
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

function createInputField(idName: string, name: string, placeholder: string)
{
    return <>
    <InputField><Nazev htmlFor={idName}>{name}: </Nazev><Pole id={idName} name={idName} placeholder={placeholder}/></InputField>
    </>
}

export const Login = () => {
    return <>
    <AuthDiv>
        <Title>Login</Title>
        {createInputField("email", "E-mail", "karelklima@bezvamail.cz")}
        {createInputField("password", "Heslo", "Heslo")}
        <Submit type="submit" value="Zaregistrovat se" />
    </AuthDiv>
    
    </>;
};

export const Register = () => {
    return <>
    
    <AuthDiv>
        <Title>Register</Title>
        {createInputField("name", "Jméno", "Karel")}
        {createInputField("nickname", "Přezdívka", "Tank")}
        {createInputField("surname", "Příjmení", "Klíma")}
        {createInputField("email", "E-mail", "karelklima@bezvamail.cz")}
        {createInputField("password", "Heslo", "Heslo")}
        {createInputField("passwordAgain", "Heslo znovu", "Heslo znovu")}
        <Submit type="submit" value="Zaregistrovat se" />
    </AuthDiv>
    </>;
};