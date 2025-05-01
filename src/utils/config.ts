import dotenv from "dotenv";

dotenv.config();

export const config = {
  dbHost: process.env.DB_HOST || "localhost",
  dbUser: process.env.DB_USER || "root",
  dbPort: parseInt(process.env.DB_PORT || "3306", 10),
  dbName: process.env.DB_NAME || "",
  dbPassword: process.env.DB_PASSWORD || "",
};
