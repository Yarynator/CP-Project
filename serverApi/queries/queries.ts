import { gql } from 'apollo-server-micro';

// ****************************
/* graphql gql types  */
// ****************************

export const queries = gql`
  type Query {
    users: [User!]!
    locales: [LOCALE!]!    
  }
 
  type User {
    ID: Int!
    name: String!
    nickname: String
    surname: String!
    password: String!
    clubhouses: [Int!]!
    favourites: [Int!]!
  }
  
  enum LOCALE {
   CS
   EN
  }
`;