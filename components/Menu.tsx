import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/Menu.module.css'
import { Login, Register } from './Login'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 1rem;
    z-index: 1;
    background-color: white;
`;

const Item = styled.ul`
    display: flex;

    li{
        margin-left: 1rem;
        text-decoration: none;
        list-style: none;
        cursor: pointer;
    }
`;

export const Menu : React.FC = () => {

    const [loginOpened, changeLoginOpened] = useState("none");

    if(loginOpened == "none")
    {
        return<>
            <Container>
                <Item>
                    <li><Link href="/">Domů</Link></li>
                    <li>Prohlížeč kluboven</li>
                    <li><Link href="./mapa">Mapa</Link></li>
                    <li>O projektu</li>
                </Item>
                <Item>
                    <li onClick={() => {
                            changeLoginOpened("login");
                    }}>Login</li>
                    <li onClick={() => {
                            changeLoginOpened("register");
                    }}>Register</li>
                </Item>
            </Container>
        </>
    } else if(loginOpened == "login")
    {
        return<>
            <Container>
                <Item>
                    <li><Link href="/">Domů</Link></li>
                    <li>Prohlížeč kluboven</li>
                    <li><Link href="./mapa">Mapa</Link></li>
                    <li>O projektu</li>
                </Item>
                <Item>
                    <li onClick={() => {
                            changeLoginOpened("none");
                    }}>Login</li>
                    <li onClick={() => {
                            changeLoginOpened("register");
                    }}>Register</li>
                </Item>
            </Container>

            <Login />
        </>
    } else if(loginOpened == "register")
    {
        return<>
            <Container>
                <Item>
                    <li><Link href="/">Domů</Link></li>
                    <li>Prohlížeč kluboven</li>
                    <li><Link href="./mapa">Mapa</Link></li>
                    <li>O projektu</li>
                </Item>
                <Item>
                    <li onClick={() => {
                            changeLoginOpened("login");
                    }}>Login</li>
                    <li onClick={() => {
                            changeLoginOpened("none");
                    }}>Register</li>
                </Item>
            </Container>

            <Register />
        </>
    }

    return <></>;
    
    

    {/*<div className={styles.menu}>
        <ul className={styles.menuItem}>
            <li><Link href="/">Domů</Link></li>
            <li>Prohlížeč kluboven</li>
            <li><Link href="./mapa">Mapa</Link></li>
            <li>O projektu</li>
        </ul>
        <div className={styles.menuItem}>
            <Login />
            <Register />
        </div>
</div>*/}
} 