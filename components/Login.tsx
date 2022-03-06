import { useState } from "react";
import styles from "../styles/Menu.module.css";

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

export const Login = () => {
    return <>
    
    <h5>Login</h5>
    
    </>;
};

export const Register = () => {
    return <>
    
    <h5>Register</h5>
    
    </>;
};