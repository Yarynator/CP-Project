import styled from 'styled-components';

import { Kalendar } from './Kalendar';

const KlubovnaStyle = styled.div`
  margin-top: 3rem;
  background-color: #d3bfa0;
  padding: 1rem;
  border: solid 1px #657f6f;
  border-radius: 1rem;

  display: flex;
`;

const Title = styled.h1`
  text-align: center;
`;

const DescriptionStyle = styled.div`
  width: calc(80vw - 40vh);

  display: flex;
  flex-direction: column;
`;

const DescStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'title desc';
`;

const DescTitle = styled.p`
  grid-area: title;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 3rem;

  margin: 0;
`;

const DescText = styled.p`
  grid-area: desc;
  margin: 0.5rem;
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
`;

const Cal = () => {
  return (
    <>
      <Kalendar />
    </>
  );
};



const Desc = (props: any) => {
  if (props.title === undefined) {
    return <Error>Error: Musíš zadat název položky!</Error>;
  }
  return (
    <>
      <DescStyle>
        <DescTitle>{props.title}:</DescTitle>
        <DescText>{props.children}</DescText>
      </DescStyle>
    </>
  );
};

const Description = () => {
  return (
    <>
      <DescriptionStyle>
        <Title>Název klubovny</Title>
        <Desc title="Popis">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          voluptatibus incidunt a delectus nostrum quas praesentium nulla iusto
          reprehenderit. Voluptas quod dignissimos ratione quas accusantium, aut
          laboriosam minus ex aliquam. Expedita adipisci similique odio fugit
          beatae. Officia, ut iusto, placeat eius vero voluptatem nostrum fugit
          maxime aliquid provident iste quaerat! At facilis quibusdam vero nihil
          harum ea sint reprehenderit quaerat.
        </Desc>
        <Desc title="Web">pepazdepa@bezvamail.cz</Desc>
        <Desc title="Adresa">Klímovo údolí 52, 530 02 Pardubice</Desc>
        {/* <Desc>Neplatná položka</Desc> */}
      </DescriptionStyle>
    </>
  );
};

export const MojeKlubovna = () => {

  return (
    <>
      <KlubovnaStyle>
        <Cal />
        <Description />
      </KlubovnaStyle>
    </>
  );
};
