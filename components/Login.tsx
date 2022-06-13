import { useState } from 'react';
import styled from 'styled-components';

import { useUserContext } from './userContext';

const Required = styled.span`
  color: red;
`;

const AuthDiv = styled.form`
  background-color: #bdd4df;
  padding: 1rem;
  border: solid 1px #657f6f;
  border-radius: 1rem;

  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const Title = styled.h5`
  color: #657f6f;
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
  padding: 0.5rem;
  border-radius: 0.7rem;
  border: solid 1px #657f6f;
`;

const Submit = styled.input`
  margin: 1rem auto;
  background-color: #87a1ae;
  border: solid 1px #657f6f;
  border-radius: 1rem;
  padding: 1rem;
`;

const Warning = styled.div`
  color: red;
`;

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  const { login } = useUserContext();

  return <>
  <AuthDiv>
    <Title>Přihlásit se</Title>
    <InputField>
          <Nazev htmlFor="email">
            E-mail <Required>*</Required>
          </Nazev>
          <Pole
            id="email"
            type="text"
            placeholder="karelklima@bezvamail.cz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputField>
        <InputField>
          <Nazev htmlFor="password">
            Heslo <Required>*</Required>
          </Nazev>
          <Pole
            id="password"
            type="password"
            placeholder="Heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputField>
        <Warning>{warning}</Warning>
        <Submit type="submit" value="Přihlásit se" onClick={async (e) => {
          e.preventDefault();

          let validace = true;
          
          if (email.length === 0 || password.length === 0) {
            validace = false;
          }

          if (validace) {
            try {
              await login(email, password);
            } catch(error) {
              console.log(error);
              setWarning('Špatné přihlašovací údaje');
            }
          } else {
            setWarning('Musis zadat vsecny povinne hodnoty');
          }
        }}/>
  </AuthDiv>
  </>;
};

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [warning, setWarning] = useState('');

  const { createUser } = useUserContext();

  return (
    <>
      <AuthDiv>
        <Title>Register</Title>
        <InputField>
          <Nazev htmlFor="email">
            E-mail <Required>*</Required>
          </Nazev>
          <Pole
            id="email"
            type="text"
            placeholder="karelklima@bezvamail.cz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputField>
        <InputField>
          <Nazev htmlFor="password">
            Heslo <Required>*</Required>
          </Nazev>
          <Pole
            id="password"
            type="password"
            placeholder="Heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputField>
        <InputField>
          <Nazev htmlFor="passwordAgain">
            Heslo znovu <Required>*</Required>
          </Nazev>
          <Pole
            id="passwordAgain"
            type="password"
            placeholder="Heslo znovu"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />
        </InputField>
        <Warning>{warning}</Warning>
        <Submit
          type="submit"
          value="Zaregistrovat se"
          onClick={async (e) => {
            e.preventDefault();

            let validace = true;

            if(password.length < 6) {
              validace = false;
              setWarning('Heslo musí mít aspoň 6 znaků');
            }

            if(password !== passwordAgain) {
              validace = false;
              setWarning('Hesla musí být stejná');
            }

            if (
              email.length === 0 ||
              password.length === 0 ||
              passwordAgain.length === 0
            ) {
              validace = false;
              setWarning('Musis zadat vsecny povinne hodnoty');
            }

            if (validace) {
              
                try {
                  await createUser(email, password);

                  setEmail('');
                  setPassword('');
                  setPasswordAgain('');
                }
                catch(error) {
                  console.log(error)
                  setWarning('Špatný formát emailu');
                }
            
          }
        }}
        />
      </AuthDiv>
    </>
  );
  return <></>;
};
