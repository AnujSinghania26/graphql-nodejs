import { UserController } from "../controllers/user.controller";

export const userResolvers = {
  Query: {
    // Query for all users
    users: () => UserController.getAllUsers(),

    getUser: (_: any, { id }: { id: number }) => UserController.getUserById(id),
  },

  Mutation: {
    createUser: (_: any, args: { name: string; email: string }) =>
      UserController.createUser(args.name, args.email),
  },
};
