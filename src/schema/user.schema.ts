import { gql } from "apollo-server";

export const userTypeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type CustomResponse {
    message: String!
    success: Boolean!
    data: User
  }

  type UserListResponse {
    message: String!
    success: Boolean!
    data: [User]!
  }

  type Query {
    users: UserListResponse
    getUser(id: Int!): CustomResponse
  }

  type Mutation {
    createUser(name: String!, email: String!): CustomResponse
  }
`;
