import dotenv from "dotenv";

dotenv.config({ quiet: true });

const parseNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : fallback;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: parseNumber(process.env.PORT, 4050),
  dbDialect: process.env.DB_DIALECT ?? "sqlite",
  dbHost: process.env.DB_HOST ?? "127.0.0.1",
  dbPort: parseNumber(process.env.DB_PORT, 3306),
  dbName: process.env.DB_NAME ?? "future_tech",
  dbUser: process.env.DB_USER ?? "root",
  dbPassword: process.env.DB_PASSWORD ?? "",
  dbStorage: process.env.DB_STORAGE ?? "storage/database.sqlite",
  dbLogging: process.env.DB_LOGGING === "true",
};
