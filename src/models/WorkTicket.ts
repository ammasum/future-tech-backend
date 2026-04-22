import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

import { sequelize } from "../config/database";

export class WorkTicket extends Model<
  InferAttributes<WorkTicket>,
  InferCreationAttributes<WorkTicket>
> {
  declare id: CreationOptional<number>;
  declare ticketId: string;
  declare clientName: string;
  declare projectType: string;
  declare serviceLane: string;
  declare location: string;
  declare status: string;
  declare assignedTeam: string;
  declare startedAt: Date;
  declare lastUpdatedAt: Date;
  declare latestUpdate: string;
  declare notes: string[];
}

WorkTicket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticketId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projectType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceLane: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assignedTeam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lastUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    latestUpdate: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    notes: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "WorkTicket",
    tableName: "work_tickets",
    timestamps: true,
  },
);
