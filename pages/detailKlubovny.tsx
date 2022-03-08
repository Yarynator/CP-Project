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
    line-height: 1.15;
    font-size: 4rem;
`;

const Name = styled.span`
    color: red;
`;

const DetailKlubovnyPage : NextPage = () => {
    return <>
    
    <Container>
        <Head>
            <title>Prohlížeč kluboven</title>
        </Head>

        <Obsah>
            <Menu />

            <Nadpis>Info o klubovně <Name>*název klubovny*</Name></Nadpis>
        </Obsah>

    </Container>
    
    </>;
}

export default DetailKlubovnyPage;