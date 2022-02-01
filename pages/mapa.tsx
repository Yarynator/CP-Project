import { NextPage } from "next";
import Head from "next/head";
import { Mapa } from "../components/Mapa";
import { Menu } from "../components/Menu";

const MapaPage : NextPage = () => {
    return <>
    
    <Head>
        <title>Mapa kluboven</title>
    </Head>

    <Menu />
    <Mapa />   
    
    
    </>;
}

export default MapaPage;