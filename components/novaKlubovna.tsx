import styled from "styled-components";

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

export const NovaKlubovna = () => {
    return <>
    <table>
        <tr>
            <td><label htmlFor="name">Název Klubovny: </label></td>
            <td><input type="text" name="name" id="name"/></td>
        </tr>
        <tr>
            <td><label htmlFor="img">Cesta k obrázku: </label></td>
            <td><input type="text" name="img" id="img"/></td>
        </tr>
        <tr>
            <td><label htmlFor="desc">Popis: </label></td>
            <td><textarea name="desc" id="desc" cols={50} rows={10} /></td>
        </tr>
        <tr>
            <td><label htmlFor="web">Web: </label></td>
            <td><input type="text" name="web" id="web"/></td>
        </tr>
        <tr>
            <td><label htmlFor="street">Adresa (Ulice a č.p.): </label></td>
            <td><input type="text" name="street" id="street"/></td>
        </tr>
        <tr>
            <td><label htmlFor="city">Město: </label></td>
            <td><input type="text" name="city" id="city"/></td>
        </tr>
        <tr>
            <td><label htmlFor="zip">PSČ: </label></td>
            <td><input type="text" name="zip" id="zip"/></td>
        </tr>
        <tr>
            <Container colSpan={2}>
                <Submit type="submit" value="Přidat klubovnu" />
            </Container>
        </tr>
    </table>
    </>;
}