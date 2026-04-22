import { seedDatabase } from "../data/seed-database";
import { sequelize } from "../config/database";
import { ClientAccount } from "./ClientAccount";
import { ContactInquiry } from "./ContactInquiry";
import { EquipmentCategory } from "./EquipmentCategory";
import { EquipmentItem } from "./EquipmentItem";
import { User } from "./User";
import { WorkTicket } from "./WorkTicket";

export const initModels = () => {
  EquipmentCategory.hasMany(EquipmentItem, {
    foreignKey: "categoryId",
    as: "items",
  });
  EquipmentItem.belongsTo(EquipmentCategory, {
    foreignKey: "categoryId",
    as: "category",
  });

  return {
    User,
    ClientAccount,
    ContactInquiry,
    EquipmentCategory,
    EquipmentItem,
    WorkTicket,
  };
};

export const syncDatabase = async (): Promise<void> => {
  initModels();
  await sequelize.sync();
  await seedDatabase();
};
