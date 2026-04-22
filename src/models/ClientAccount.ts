import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import { sequelize } from "../config/database";

export class ClientAccount extends Model<
  InferAttributes<ClientAccount>,
  InferCreationAttributes<ClientAccount>
> {
  declare id: CreationOptional<number>;
  declare portalId: string;
  declare name: string;
  declare phone: string;
  declare email: string;
  declare passcodeHash: string;
  declare company: string;
}

ClientAccount.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    portalId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    passcodeHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ClientAccount",
    tableName: "client_accounts",
    timestamps: true,
  },
);
