import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { Klubovna } from '../components/Klubovna';
import { Menu } from '../components/Menu';
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
  line-height: 1.15;
  font-size: 4rem;
`;

const Icon = styled.div`
  text-align: center;
  font-size: large;

  margin-top: 1rem;
`;

const ProhlizecPage: NextPage = () => {
  const { loading, data, error } = useClubhousesQuery();

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Container>
        <Head>
          <title>Prohlížeč kluboven</title>
        </Head>

        <Obsah>
          <Menu />

          <Nadpis>Prohlížeč kluboven</Nadpis>

          {data?.clubhouses.map((element) => (
            <Klubovna
              klubovna={{
                id: element.ID,
                name: element.name,
                Description: [
                  {
                    name: 'Popis',
                    text: element.description,
                  },
                  {
                    name: 'Web',
                    text: element.web,
                  },
                  {
                    name: 'Adresa',
                    text: `${element.street}, ${element.zip} ${element.city}`,
                  },
                ],
              }}
            />
          ))}
        </Obsah>
      </Container>
    </>
  );
};

export default ProhlizecPage;
