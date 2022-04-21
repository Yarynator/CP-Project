import { gql } from 'apollo-server-micro';

// ****************************
/* graphql gql types  */
// ****************************
export const mutations = gql`
  type Mutation {
    registerUser(input: RegisterInput!): User
    addClubhouse(input: ClubhouseInput!): Clubhouse
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

  input ClubhouseInput {
    ID: String!,
    name: String!,
    img: String!,
    description: String!,
    web: String!,
    street: String!,
    city: String!,
    zip: String!
}
`;