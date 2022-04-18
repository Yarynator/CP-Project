import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Kalendar } from "../components/Kalendar";
import { Klubovna } from "../components/Klubovna";
import { Menu } from "../components/Menu";
import { KlubovnaProp } from "../components/Klubovna";
import { useClubhousesQuery } from "../generated/graphql";

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

const ProhlizecPage : NextPage = () => {

    const klubovna1 : KlubovnaProp = {
        id: "0",
        name: "Klubovna 1",
        Description: [
            {
                name: "Popis",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, obcaecati, temporibus, neque quas necessitatibus placeat minima molestiae a quis amet deserunt? Eligendi nesciunt ipsa labore asperiores consequatur ad sit ea."
            },
            {
                name: "Web",
                text: "klimovoudoli.cz"
            },
            {
                name: "Adresa",
                text: "Klímovo údolí 52, 530 02 Pardubice"
            }
        ]
    }

    const klubovna2 : KlubovnaProp = {
        id: "0",
        name: "Klubovna 2",
        Description: [
            {
                name: "Popis",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse ab numquam repellat nesciunt excepturi! Iusto consectetur, deserunt dolor alias unde similique labore debitis dolorem voluptatem sit fugit repudiandae neque?"
            },
            {
                name: "Web",
                text: "kacisovoudoli.cz"
            }
        ]
    }

    const {loading, data, error} = useClubhousesQuery();

    if(loading) return <div>Loading</div>

    if(error) return <div>Error</div>

    return <>
    
    <Container>
        <Head>
            <title>Prohlížeč kluboven</title>
        </Head>

        <Obsah>
            <Menu />

            <Nadpis>Prohlížeč kluboven</Nadpis>


            {
                data?.clubhouses.map(element => {

                    console.log(element);

                    <Klubovna klubovna={{
                        id: element.ID,
                        name: element.name,
                        Description: [
                            {
                                name: "Popis",
                                text: element.description
                            },
                            {
                                name: "Web",
                                text: element.web
                            }
                        ]
                    }} />
                })
            }


            <Klubovna klubovna={klubovna1} />
            <Klubovna klubovna={klubovna2}/>
        </Obsah>

    </Container>
    
    </>;
}

export default ProhlizecPage;