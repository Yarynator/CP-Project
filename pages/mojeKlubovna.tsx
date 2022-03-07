import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Menu } from "../components/Menu";

const Container = styled.div`
    background-color: #F6EBD8;
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
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
`;

const KlubovnaStyle = styled.div`
    border: solid 1px black;
    padding: 1rem;
`;

const MapStyle = styled.div`
    border: solid 1px black;
    padding: 1rem;
`;

const DescriptionStyle = styled.div`
    border: solid 1px black;
    padding: 1rem;
`;

const Klubovna = () => {
    return <>
        <KlubovnaStyle>
            <Map />
            <DescriptionStyle />
        </KlubovnaStyle>
    </>;
};

const Map = () => {
    return <>
        <MapStyle />
    </>
}

const MojeKlubovnaPage : NextPage = () => {
    return <>
    
    <Container>
        <Head>
            <title>Moje klubovna</title>
        </Head>

        <Obsah>
            <Menu />

            <Nadpis>Moje Klubovna</Nadpis>
            <Klubovna />
            
        </Obsah>

    </Container>
    
    </>;
}

export default MojeKlubovnaPage;