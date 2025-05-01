import { HelloController } from "../controllers/hello.controller";

export const helloResolvers = {
  Query: {
    hello: () => HelloController.sayHello(),
  },
};
