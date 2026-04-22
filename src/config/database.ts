import fs from "node:fs";
import path from "node:path";
import { Sequelize } from "sequelize";

import { env } from "./env";

const storagePath = path.resolve(process.cwd(), env.dbStorage);

if (env.dbDialect === "sqlite") {
  fs.mkdirSync(path.dirname(storagePath), { recursive: true });
}

export const sequelize =
  env.dbDialect === "mysql"
    ? new Sequelize(env.dbName, env.dbUser, env.dbPassword, {
        dialect: "mysql",
        host: env.dbHost,
        port: env.dbPort,
        logging: env.dbLogging ? console.log : false,
      })
    : new Sequelize({
        dialect: "sqlite",
        storage: storagePath,
        logging: env.dbLogging ? console.log : false,
      });

export const connectDatabase = async (): Promise<void> => {
  await sequelize.authenticate();
};
