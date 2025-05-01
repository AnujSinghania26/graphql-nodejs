import { Sequelize } from "sequelize";

import { config, logger } from "../utils/index";

export const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
    port: config.dbPort,
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info("✅ MySQL connected.");
  } catch (error) {
    logger.error("❌ DB connection error:", error);
  }
};
