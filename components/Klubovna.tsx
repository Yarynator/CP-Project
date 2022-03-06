import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
    position: relative;
    padding: 1rem;
    border: solid 1px black;
    margin-top: 1.5rem;
    background-color: #BDD4DF;
    border: solid 1px #657F6F;
    border-radius: 1rem;
    
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 4fr;
    grid-template-areas:
        "img title cal"
        "img desc cal";
`;

const Img = styled.img`
    grid-area: img;
    height: 15vh;
    width: 15vh;
`;

const Ttl = styled.h3`
    grid-area: title;
    height: 3vh;
    min-width: 300px;
    margin: 0;
    text-align: center;
`;

const Cal = styled.div`
    border: solid 1px black;
    grid-area: cal;
    height: 15vh;
    width: 15vh;
`;

const Desc = styled.div`
    grid-area: desc;
    height: 12vh;
    min-width: 300px
`;

const Info = styled.p`
    margin: .5rem;
`;

const Obrazek = () => {
    return <>
    <Img src="/logo.svg" />
    </>;
}

const Title = () => {
    return <>
    <Ttl>
        Název klubovny
    </Ttl>
    </>;
}

const Description = () => {
    return <>
    <Desc>
        <Info>Popis: Popis klubovny</Info>
        <Info><Link href="https://example.com">Web: www.naseklubovna.cz</Link></Info>
    </Desc>
    </>;
}

const Calendar = () => {
    return <>
    <Cal>
        Calendar
    </Cal>
    {/*<Calendar/>*/}
    </>;
}

export const Klubovna = () => {
    return <>
    
    <Container>
        <Obrazek />
        <Title />
        <Description />
        <Calendar />
    </Container>

    </>;
};