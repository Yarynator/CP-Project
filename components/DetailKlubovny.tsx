import { KlubovnaProp } from "../components/Klubovna";
import styled from "styled-components";

const Container = styled.div`
    padding: 1rem;
    border: solid 1px black;
`;

interface Props {
    klubovna: KlubovnaProp;
}

const Stranka = () => {
    return <>
        <Container></Container>
    </>;
}

export const DetailKlubovny : React.FC<Props> = (props) => {
    return <>
        <Stranka></Stranka>
    </>;
}