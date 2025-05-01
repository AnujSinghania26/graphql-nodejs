import { ApolloError } from "apollo-server-errors";
import { logger } from "../utils/index";
import { User } from "../models/user.model";
import { UserMessages } from "../utils/messages/index";

export class UserController {
  static async getAllUsers() {
    logger.info("[UserController] getAllUsers called");

    try {
      const users = await User.findAll();

      logger.info(`[UserController] Found ${users.length} users`);
      return {
        success: true,
        message: UserMessages.SUCCESS.userFound,
        data: users,
      };
    } catch (error: any) {
      logger.error(`[UserController] getAllUsers error: ${error.message}`);
      throw new ApolloError(error.message || UserMessages.ERROR.userNotFound);
    }
  }

  static async createUser(name: string, email: string) {
    logger.info(
      `[UserController] createUser called with name: ${name}, email: ${email}`
    );

    try {
      const newUser = await User.create({ name, email });

      logger.info(`[UserController] User created with ID: ${newUser.id}`);
      return {
        success: true,
        message: UserMessages.SUCCESS.userCreated,
        data: newUser,
      };
    } catch (error: any) {
      logger.error(`[UserController] createUser error: ${error.message}`);
      throw new ApolloError(
        error.message || UserMessages.ERROR.userCreationFailed
      );
    }
  }

  static async getUserById(id: number) {
    logger.info(`[UserController] getUserById called with ID: ${id}`);

    try {
      const data: User | null = await User.findOne({ where: { id } });

      if (!data) {
        logger.warn(`[UserController] No user found with ID: ${id}`);
        throw new ApolloError(UserMessages.ERROR.userNotFound);
      }

      logger.info(`[UserController] User found with ID: ${id}`);
      return {
        success: true,
        message: UserMessages.SUCCESS.userFound,
        data: data,
      };
    } catch (error: any) {
      logger.error(`[UserController] getUserById error: ${error.message}`);
      throw new ApolloError(error.message || UserMessages.ERROR.userNotFound);
    }
  }
}
