import styled from "styled-components";
import Link from "next/link";
import { Kalendar } from "./Kalendar";

const Container = styled.div`
    margin-top: 3rem;
    background-color:  #D3BFA0;
    padding: 1rem;
    border: solid 1px #657F6F;
    border-radius: 1rem;
    width: 80vw;

    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
`;

const DescriptionContainer = styled.div`
    display: flex;
`;

const Image = styled.img`
    flex-grow: 1;
    width: 10%;
    padding: 1rem;
`;

const CalendarContainer = styled.div`
    flexGrow: 1;
    padding-right: 2rem;
`;

const DescriptionStyle = styled.div`
    flex-grow: 3;
    padding: 1rem;
    max-width: 45vw;
    margin: 0;
    padding: 0;
    
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "title desc";
`;

const DescTitle = styled.p`
    grid-area: title;
    font-weight: bold;
    text-align: right;
    padding-right: 3rem;

    display: flex;
    align-items: center;
    justify-content: right;
    
    margin: 0;
    padding: .5rem;
`;

const DescText = styled.p`
    grid-area: desc;

    
    margin: 0;
    padding: .5rem;
`;

const Error = styled.h3`
    text-align: center;
    background-color: #d5ada4;
    color: #EA614A;
    width: 60%;
    margin: 3rem auto;
    padding: .5rem;
    border: solid 1px #A87A93;
    border-radius: .5rem;
    height: 3rem;
`;

const Description = (props : any) => {
    if(props.title == null)
    {
        return <Error>Error: Musíš zadat název položky!</Error>
    }

    return <DescriptionStyle>
        <DescTitle>{props.title}:</DescTitle>
        <DescText>{props.children}</DescText>
    </DescriptionStyle>
}

export const Klubovna = () => {
    return <>
    
    <Container>
    <Link href="./detailKlubovny"><Title>Klubovna</Title></Link>
        <DescriptionContainer>
            <Image src="./logo.svg" />
            <div>
                <Description title="Popis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, nemo dicta? Quaerat maiores facere assumenda sit asperiores ipsam beatae, sint expedita impedit exercitationem magnam culpa accusamus, provident quo adipisci minus?</Description>
                <Description title="Web">pepazdepa@bezvamail.cz</Description>
                <Description title="Adresa">Klímovo údolí 52, 530 02 Pardubice</Description>
            </div>
            <CalendarContainer><Kalendar /></CalendarContainer>
            
        </DescriptionContainer>
        
    </Container>

    </>;
};