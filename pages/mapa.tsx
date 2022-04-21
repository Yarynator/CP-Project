import { NextPage } from "next";
import Head from "next/head";
import { Mapa } from "../components/Mapa";
import { Menu } from "../components/Menu";
import styled from "styled-components";

const Container = styled.div`
    background-color: #F6EBD8;
`;

const MapaPage : NextPage = () => {
    return <>
    
    <Container>
        <Head>
            <title>Mapa kluboven</title>
        </Head>

        <Menu />
        {/*<Mapa />*/}   
    </Container>
    
    </>;
}

export default MapaPage;