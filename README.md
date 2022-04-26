# Prohlížeč skautských kluboven

<span style="color:red">
    Projekt je ve fázi vývoje! Vetšina částí je zatím nefunkčních!
</span>


Projekt byl vytvořen jako studentský projekt do předmětu Cvičení z programování na škole DELTA - SŠIE v Pardubicích.

Projekt je vytvořen z úmyslem vytvořit portál, který by usnadnil českých skautům rezervaci kluboven.
Skauti často dělají výpravy do jiných míst České republiky, než je jejich domovina a většinou přespání řeší domluvou s jiným střediskem/oddílem z okolí. Tyto střediska/oddíly řeší objednání klubovny přes jejich web, kde na ně je kontakt, většinou formou google formuláře nebo telefonického či emailového kontaktování, to už záleží, jak si to dané středisko/oddíl nastaví.
Cílem tohoto projektu je sjednocení těchto rezervačních systémů, zjednodušit systém pro uživatele a udělat vše přehledné a na jednom místě.

## Jak si projekt zprovoznit na svém stroji

Spusťte následující příkazy v konzoli:

```bash
yarn install
yarn dev
```

Pro správný chod aplikace bude nutné změnit databázi na svoji v následujících souborech:
```bash
firestore/firestore.tsx
components/userContext.tsx
```

© [Svjet.cz](https://svjet.cz), 2022.
