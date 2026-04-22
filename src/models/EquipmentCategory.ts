import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import { sequelize } from "../config/database";

export class EquipmentCategory extends Model<
  InferAttributes<EquipmentCategory>,
  InferCreationAttributes<EquipmentCategory>
> {
  declare id: CreationOptional<number>;
  declare slug: string;
  declare title: string;
  declare description: string;
}

EquipmentCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "EquipmentCategory",
    tableName: "equipment_categories",
    timestamps: true,
  },
);
