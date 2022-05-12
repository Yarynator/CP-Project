import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { Menu } from '../components/Menu';

const Container = styled.div`
  background-color: #f6ebd8;
`;

const MapaPage: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Mapa kluboven</title>
        </Head>

        <Menu />
        {/* <Mapa /> */}
      </Container>
    </>
  );
};

export default MapaPage;
