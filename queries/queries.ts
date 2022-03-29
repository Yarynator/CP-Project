import { gql } from "@apollo/client";

export const localesQuery = gql`
    query locales {
        locales
    }
    query users {
        users
    }
`