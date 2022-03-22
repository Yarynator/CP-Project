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
    ID: String!
    name: String!
    nickname: String
    surname: String!
    email: String!  
    password: String!
    clubhouses: [Clubhouse]
    favourites: [Int]
  }

  type Clubhouse {
    ID: String!
  }
  
  enum LOCALE {
   CS
   EN
  }
`;