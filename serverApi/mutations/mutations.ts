import { gql } from 'apollo-server-micro';

// ****************************
/* graphql gql types  */
// ****************************
export const mutations = gql`
  type Mutation {
    registerUser(input: RegisterInput!): User
  }
 
  input RegisterInput {
    ID: String!,
    name: String!,
    nickname: String,
    surname: String!,
    email: String!,
    password: String!,
    clubhouses: [String],
    favourites: [String]
  }
`;