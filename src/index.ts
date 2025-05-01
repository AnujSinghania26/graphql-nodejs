import server from "./server";
import { sequelize } from "./models"; // make sure it's exported from index.ts
import { logger } from "./utils/index";
server.listen().then(async ({ url }) => {
  await sequelize.sync({ alter: true }); // 🔧 S
  logger.info(`🚀 Server ready at ${url}`);
});
