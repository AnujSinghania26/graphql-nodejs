import path from 'path';
import dotenv from 'dotenv';
import { ApolloServer } from "apollo-server";

import { connectDB } from "./models";
import { userTypeDefs, helloTypeDefs } from "./schema/index";
import { userResolvers, helloResolvers } from "./resolvers/index";

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const server = new ApolloServer({
  typeDefs: [helloTypeDefs, userTypeDefs],
  resolvers: [helloResolvers, userResolvers],
  formatError: (err) => {
    return {
      message: err.message,
      success: false,
      data: null,
    };
  },
});
connectDB();
export default server;
