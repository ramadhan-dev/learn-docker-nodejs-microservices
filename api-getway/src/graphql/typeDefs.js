import { gql } from "apollo-server";

const typeDefs = gql `
  type User {
    id: ID!
    first_name: String!
    email: String!
    username: String!
    password: String!
  }

  type Mutation {
    createUser(
      email: String!
      first_name: String!
      username: String!
      password: String!
    ): User!
  }

  type Query {
    User: [User!]!
  }
`;

export default typeDefs;