import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Menu } from "../components/Menu";
import { NovaKlubovna } from "../components/novaKlubovna";

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

const Warning = styled.div`
    background-color: #f8d7da;
    color: #721c24;
    border: solid 1px #f5c6cb;
    margin-bottom: 3rem;
    padding: 1rem;
    border-radius: 4px;
`;

const MojeKlubovnaPage : NextPage = () => {

    const router = useRouter();

    const [id, setId] = useState();

    useEffect(() => {
        setId(sessionStorage.getItem("ID"));
    });

    
    if(id) {
        return <>
        
        <Container>
            <Head>
                <title>Nová klubovna</title>
            </Head>

            <Obsah>
                <Menu />

                <Nadpis>Nová Klubovna</Nadpis>
                <NovaKlubovna />
            </Obsah>

        </Container>
        
        </>;
    } else {
        return <>
        <Container>
            <Head>
                <title>Nová Klubovna</title>
            </Head>
            <Obsah>
                <Menu />

                <Warning>Pro přidání klubovny se musíš přihlásit</Warning>

            </Obsah>
        </Container>
        </>;
    }
}

export default MojeKlubovnaPage;