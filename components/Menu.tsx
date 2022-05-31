import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { Login, Register } from './Login';
import { useUserContext } from './userContext';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1rem;
  z-index: 1;
  background-color: #fffaf2;
`;

const Item = styled.ul`
  display: flex;
  margin-right: 2rem;

  li {
    margin-left: 1rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
  }
`;

export const Menu : React.FC = () => {
  const [loginOpened, changeLoginOpened] = useState('none');

  const { user, logout } = useUserContext();

  const router = useRouter();

  if (!user) {
    if (loginOpened === 'none') {
      return (
        <>
          <Container>
            <Item>
              <li>
                <Link href="/">Domů</Link>
              </li>
              <li>
                <Link href="./prohlizec">Prohlížeč kluboven</Link>
              </li>
              <li>
                <Link href="./mapa">Mapa</Link>
              </li>
              <li>
                <Link href="./projekt">O projektu</Link>
              </li>
            </Item>
            <Item>
              <li
                onClick={() => {
                  changeLoginOpened('login');
                }}
              >
                Login
              </li>
              <li
                onClick={() => {
                  changeLoginOpened('register');
                }}
              >
                Register
              </li>
            </Item>
          </Container>
        </>
      );
    }
    if (loginOpened === 'login') {
      return (
        <>
          <Container>
            <Item>
              <li>
                <Link href="/">Domů</Link>
              </li>
              <li>
                <Link href="./prohlizec">Prohlížeč kluboven</Link>
              </li>
              <li>
                <Link href="./mapa">Mapa</Link>
              </li>
              <li>
                <Link href="./projekt">O projektu</Link>
              </li>
            </Item>
            <Item>
              <li
                onClick={() => {
                  changeLoginOpened('none');
                }}
              >
                Login
              </li>
              <li
                onClick={() => {
                  changeLoginOpened('register');
                }}
              >
                Register
              </li>
            </Item>
          </Container>

          <Login />
        </>
      );
    }
    if (loginOpened === 'register') {
      return (
        <>
          <Container>
            <Item>
              <li>
                <Link href="/">Domů</Link>
              </li>
              <li>
                <Link href="./prohlizec">Prohlížeč kluboven</Link>
              </li>
              <li>
                <Link href="./mapa">Mapa</Link>
              </li>
              <li>
                <Link href="./projekt">O projektu</Link>
              </li>
            </Item>
            <Item>
              <li
                onClick={() => {
                  changeLoginOpened('login');
                }}
              >
                Login
              </li>
              <li
                onClick={() => {
                  changeLoginOpened('none');
                }}
              >
                Register
              </li>
            </Item>
          </Container>

          <Register />
        </>
      );
    }
  } else {
    return (
      <>
        <Container>
          <Item>
            <li>
              <Link href="/">Domů</Link>
            </li>
            <li>
              <Link href="./prohlizec">Prohlížeč kluboven</Link>
            </li>
            <li>
              <Link href="./mapa">Mapa</Link>
            </li>
            <li>
              <Link href="./projekt">O projektu</Link>
            </li>
          </Item>
          <Item>
            <Link href="./moje-klubovna">
              <li>Moje klubovna</li>
            </Link>
            <li>Profil</li>
            <li
              onClick={() => {
                /* sessionStorage.removeItem("ID");
                                sessionStorage.removeItem("name");
                                sessionStorage.removeItem("surname");
                                sessionStorage.removeItem("nickname");
                                sessionStorage.removeItem("email");
                                setUser(""); */

                logout();

                router.push('/');
              }}
            >
              Odhlásit se
            </li>
          </Item>
        </Container>
      </>
    );
  }

  return <></>;
};
