import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import { sequelize } from "../config/database";
import { EquipmentCategory } from "./EquipmentCategory";

export class EquipmentItem extends Model<
  InferAttributes<EquipmentItem>,
  InferCreationAttributes<EquipmentItem>
> {
  declare id: CreationOptional<number>;
  declare itemId: string;
  declare name: string;
  declare categoryId: ForeignKey<EquipmentCategory["id"]>;
  declare specSummary: string;
  declare deploymentFit: string;
  declare imageLabel: string;
  declare specs: string[];
}

EquipmentItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "equipment_categories",
        key: "id",
      },
    },
    specSummary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deploymentFit: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageLabel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specs: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "EquipmentItem",
    tableName: "equipment_items",
    timestamps: true,
  },
);
