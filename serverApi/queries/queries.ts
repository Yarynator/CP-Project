import { gql } from 'apollo-server-micro';

// ****************************
/* graphql gql types  */
// ****************************

export const queries = gql`
  type Query {
    users: [User!]!
    locales: [LOCALE!]!    
    clubhouses: [Clubhouses!]!
  }
 
  type User {
    ID: String!
    name: String!
    nickname: String
    surname: String!
    email: String!  
    password: String!
    clubhouses: [String]
    favourites: [String]
  }

  type Clubhouses {
    ID: String!
    name: String!
    img: String!
    description: String!
    web: String!
    street: String!
    city: String!
    zip: String!
  }

  type Clubhouse {
    ID: String!
  }
  
  enum LOCALE {
   CS
   EN
  }
`;