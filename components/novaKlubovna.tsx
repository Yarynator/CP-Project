import { useState } from "react";
import styled from "styled-components";
import { AddClubhouse } from "../firestore/firestore";
import { useAddClubhouseMutation } from "../generated/graphql";
import { Clubhouse } from "../serverApi/queries";
import { v4 as uuid } from "uuid";

const Container = styled.td`
    text-align: center;
`;

const Submit = styled.input`
    margin: 1rem auto;
    background-color: #87A1AE;
    border: solid 1px #657F6F;
    border-radius: 1rem;
    padding: 1rem;
`;

const Pole = styled.input`
    width: 300px;
    padding: .5rem;
    border-radius: .7rem;
    border: solid 1px #657F6F;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const TextovePole = styled.textarea`
    padding: .5rem;
    border-radius: .7rem;
    border: solid 1px #657F6F;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const NovaKlubovna = () => {

    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [web, setWeb] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    const [addClubhouse, {loading: mutationIsLoading}] = useAddClubhouseMutation();

    return <>
    <table>
        <tr>
            <td><label htmlFor="name">Název Klubovny: </label></td>
            <td><Pole type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/></td>
        </tr>
        <tr>
            <td><label htmlFor="img">Cesta k obrázku: </label></td>
            <td><Pole type="text" name="img" id="img" value={img} onChange={(e) => setImg(e.target.value)}/></td>
        </tr>
        <tr>
            <td><label htmlFor="desc">Popis: </label></td>
            <td><TextovePole name="desc" id="desc" cols={50} rows={10} value={description} onChange={(e) => setDescription(e.target.value)}/></td>
        </tr>
        <tr>
            <td><label htmlFor="web">Web: </label></td>
            <td><Pole type="text" name="web" id="web" value={web} onChange={(e) => setWeb(e.target.value)}/></td>
        </tr>
        <tr>
            <td><label htmlFor="street">Adresa (Ulice a č.p.): </label></td>
            <td><Pole type="text" name="street" id="street" value={street} onChange={(e) => setStreet(e.target.value)}/></td>
        </tr>
        <tr>
            <td><label htmlFor="city">Město: </label></td>
            <td><Pole type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)}/></td>
        </tr>
        <tr>
            <td><label htmlFor="zip">PSČ: </label></td>
            <td><Pole type="text" name="zip" id="zip" value={zip} onChange={(e) => setZip(e.target.value)}/></td>
        </tr>
        <tr>
            <Container colSpan={2}>
                <Submit type="submit" value="Přidat klubovnu" onClick={() => {
                    const myuuid = uuid();

                    const clubhouse : Clubhouse = {
                        ID: myuuid,
                        name: name,
                        img: img,
                        description: description,
                        web: web,
                        street: street,
                        city: city,
                        zip: zip
                    }

                    AddClubhouse(clubhouse);
                }} />
            </Container>
        </tr>
    </table>
    </>;
}