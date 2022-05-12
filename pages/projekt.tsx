import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { Menu } from '../components/Menu';

const Container = styled.div`
  background-color: #f6ebd8;
`;

const Obsah = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Nadpis = styled.h1`
  text-align: center;
  margin: 2 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const Popis = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: justify;
`;

const Footer = styled.p`
  margin-top: 8rem;
`;

const Warning = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: solid 1px #f5c6cb;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 4px;
`;

const OProjektuPage: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>O projektu</title>
        </Head>

        <Menu />

        <Obsah>
          <Nadpis>O projektu</Nadpis>
          <Popis>
            <Warning>
              Projekt je ve fázi vývoje! Vetšina částí je zatím nefunkčních!
            </Warning>
            <p>
              Projekt byl vytvořen jako studentský projekt do předmětu Cvičení z
              programování na škole DELTA - SŠIE v Pardubicích.
            </p>
            <h3>O čem projekt je?</h3>
            <p>
              Projekt je vytvořen z úmyslem vytvořit portál, který by usnadnil
              českých skautům rezervaci kluboven.
            </p>
            <p>
              Skauti často dělají výpravy do jiných míst České republiky, než je
              jejich domovina a většinou přespání řeší domluvou s jiným
              střediskem/oddílem z okolí. Tyto střediska/oddíly řeší objednání
              klubovny přes jejich web, kde na ně je kontakt, většinou formou
              google formuláře nebo telefonického či emailového kontaktování, to
              už záleží, jak si to dané středisko/oddíl nastaví.
            </p>
            <p>
              Cílem tohoto projektu je sjednocení těchto rezervačních systémů,
              zjednodušit systém pro uživatele a udělat vše přehledné a na
              jednom místě.
            </p>

            <Footer>
              Jakékoliv jeho šíření, přeprodávání a tvoření kopií je nelegální.
              Všechna práva patří Martinu Bíškovi, který tento projekt vytvořil.
              Všechna práva vyhrazena.
            </Footer>
          </Popis>
        </Obsah>
      </Container>
    </>
  );
};

export default OProjektuPage;
