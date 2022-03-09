import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { DetailKlubovny } from "../components/DetailKlubovny";
import { KlubovnaProp } from "../components/Klubovna";
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

    const klubovna1 : KlubovnaProp = {
        id: 0,
        name: "Klubovna 1",
        Description: [
            {
                id: 0,
                name: "Popis",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, obcaecati, temporibus, neque quas necessitatibus placeat minima molestiae a quis amet deserunt? Eligendi nesciunt ipsa labore asperiores consequatur ad sit ea."
            },
            {
                id: 1,
                name: "Web",
                text: "klimovoudoli.cz"
            },
            {
                id: 2,
                name: "Adresa",
                text: "Klímovo údolí 52, 530 02 Pardubice"
            }
        ]
    }


    return <>
    
    <Container>
        <Head>
            <title>Prohlížeč kluboven</title>
        </Head>

        <Obsah>
            <Menu />

            <Nadpis>Info o klubovně <Name>*název klubovny*</Name></Nadpis>
            <DetailKlubovny klubovna={klubovna1} />
        </Obsah>

    </Container>
    
    </>;
}

export default DetailKlubovnyPage;