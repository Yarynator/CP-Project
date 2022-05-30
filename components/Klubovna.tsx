import Link from 'next/link';
import styled from 'styled-components';

import { Kalendar } from './Kalendar';

const Container = styled.div`
  margin-top: 3rem;
  background-color: #d3bfa0;
  padding: 1rem;
  border: solid 1px #657f6f;
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
  flexgrow: 1;
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
  grid-template-areas: 'title desc';
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
  padding: 0.5rem;
`;

const DescText = styled.p`
  grid-area: desc;

  margin: 0;
  padding: 0.5rem;
`;

const Error = styled.h3`
  text-align: center;
  background-color: #d5ada4;
  color: #ea614a;
  width: 60%;
  margin: 3rem auto;
  padding: 0.5rem;
  border: solid 1px #a87a93;
  border-radius: 0.5rem;
  height: 3rem;
`;

const Description = (props: any) => {
  if (props.title === undefined) {
    return <Error>Error: Musíš zadat název položky!</Error>;
  }

  return (
    <DescriptionStyle>
      <DescTitle>{props.title}:</DescTitle>
      <DescText>{props.children}</DescText>
    </DescriptionStyle>
  );
};

export type DescriptionProp = {
  name: string;
  text: string;
};

export type KlubovnaProp = {
  id: string;
  name: string;
  Description: Array<DescriptionProp>;
};

interface Props {
  klubovna: KlubovnaProp;
}

export const Klubovna: React.FC<Props> = (props) => {
  return (
    <>
      <Container>
        <Link href={`./detail-klubovny?id=${props.klubovna.id}`}>
          <Title>{props.klubovna.name}</Title>
        </Link>
        <DescriptionContainer>
          <Image src="./logo.svg" />
          <div>
            {/* <Description title="Popis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, nemo dicta? Quaerat maiores facere assumenda sit asperiores ipsam beatae, sint expedita impedit exercitationem magnam culpa accusamus, provident quo adipisci minus?</Description>
                <Description title="Web">pepazdepa@bezvamail.cz</Description>
                <Description title="Adresa">Klímovo údolí 52, 530 02 Pardubice</Description> */}

            {props.klubovna.Description.map((descProp) => (
              <Description key={descProp} title={descProp.name}>{descProp.text}</Description>
            ))}
          </div>
          <CalendarContainer>
            <Kalendar />
          </CalendarContainer>
        </DescriptionContainer>
      </Container>
    </>
  );
};
