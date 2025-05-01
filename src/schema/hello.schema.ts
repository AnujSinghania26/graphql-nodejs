import { gql } from "apollo-server";

export const helloTypeDefs = gql`
  type Query {
    hello: String
  }
`;
