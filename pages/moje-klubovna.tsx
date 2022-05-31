import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';

import { Klubovna } from '../components/Klubovna';
import { Menu } from '../components/Menu';
import { useUserContext } from '../components/userContext';
import { useClubhousesQuery } from '../generated/graphql';

const Container = styled.div`
  background-color: #f6ebd8;
`;

const Obsah = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nadpis = styled.h1`
  text-align: center;
  margin: 2rem 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const Warning = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: solid 1px #f5c6cb;
  margin-bottom: 3rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
`;

const Icon = styled.div`
  margin-top: 1rem;
`;

/* const isGood = (x: any) => {
   const { user } = useUserContext();

   return x.admins?.includes(user?.user.uid)
} */

const MojeKlubovnaPage: NextPage = () => {

  const { user } = useUserContext();
  const { data } = useClubhousesQuery({ skip: !user });

  const klubovny: Array<any> = [];

  data?.clubhouses.forEach((element) => {
    if (element.admins?.includes(user?.user.uid)) {
      klubovny.push(element);
    }
  });

    if (klubovny.length === 0) {
      return (
        <>
          <Container>
            <Head>
              <title>Moje klubovna</title>
            </Head>

            <Obsah>
              <Menu />

              <Nadpis>Moje Klubovna</Nadpis>

              <Warning>Zatím nespravuješ žádné klubovny</Warning>

              <Icon>
                <Link href="./novaKlubovna">
                  <AiOutlinePlusCircle />
                </Link>
              </Icon>
            </Obsah>
          </Container>
        </>
      );
    
    return (
      <>
        <Container>
          <Head>
            <title>Moje klubovna</title>
          </Head>

          <Obsah>
            <Menu />

            <Nadpis>Moje Klubovna</Nadpis>

            {klubovny.map((element) => (
              <Klubovna key={5}
                klubovna={{
                  id: element.ID,
                  name: element.name,
                  Description: [
                    {
                      name: 'Popis',
                      text: element.description,
                    },
                  ],
                }}
              />
            ))}

            <Icon>
              <Link href="./novaKlubovna">
                <AiOutlinePlusCircle />
              </Link>
            </Icon>
          </Obsah>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <Head>
          <title>Moje klubovna</title>
        </Head>

        <Obsah>
          <Menu />
          <Warning>Pro přístup ke klubovnám se musíš přihlásit!</Warning>
        </Obsah>
      </Container>
    </>
  );
};

export default MojeKlubovnaPage;
