import { gql } from "@apollo/client";

export const localesQuery = gql`
    query locales {
        locales
    }
    query users {
        users {
            ID
            name
            surname
            nickname
            email
            password
            clubhouses
            favourites
        }
    }
    query clubhouses
    {
        clubhouses
        {
            ID
            name
            img
            description
            web
            street
            city
            zip
        }
    }
    mutation registerUser($id: String!, $name: String!, $nickname: String, $surname: String!, $email: String!, $password: String!, $clubhouses: [String], $favourites: [String])
    {
        registerUser(input: {ID: $id, name: $name, nickname: $nickname, surname: $surname, email: $email, password: $password, clubhouses: $clubhouses, favourites: $favourites}) 
        {
            ID
            name
            nickname
            surname
            email
            password
            clubhouses
            favourites
        }
    }
`