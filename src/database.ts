import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DATABASE_HOST || "localhost",
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USERNAME || "user",
  password: process.env.DATABASE_PASSWORD || "password",
  database: process.env.DATABASE_NAME || "crm",
  modelPaths: [__dirname + "/models"],
});

export default sequelize;
