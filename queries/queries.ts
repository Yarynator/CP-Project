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
`