import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import { sequelize } from "../config/database";

export class ContactInquiry extends Model<
  InferAttributes<ContactInquiry, { omit: "createdAt" | "updatedAt" }>,
  InferCreationAttributes<ContactInquiry, { omit: "createdAt" | "updatedAt" }>
> {
  declare id: CreationOptional<number>;
  declare inquiryId: string;
  declare name: string;
  declare email: string;
  declare phone: string;
  declare topic: string;
  declare message: string;
  declare status: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

ContactInquiry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    inquiryId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "new",
    },
  },
  {
    sequelize,
    modelName: "ContactInquiry",
    tableName: "contact_inquiries",
    timestamps: true,
  },
);
