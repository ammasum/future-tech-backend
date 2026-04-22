import dotenv from "dotenv";

dotenv.config({ quiet: true });

const parseNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : fallback;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: parseNumber(process.env.PORT, 4000),
  dbStorage: process.env.DB_STORAGE ?? "storage/database.sqlite",
  dbLogging: process.env.DB_LOGGING === "true",
};
