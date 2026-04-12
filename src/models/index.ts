import { sequelize } from "../config/database";
import { User } from "./User";

export const initModels = () => ({
  User,
});

export const syncDatabase = async (): Promise<void> => {
  initModels();
  await sequelize.sync();
};
