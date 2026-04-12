import { Router } from "express";

import { sequelize } from "../config/database";

const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({
    status: "ok",
    environment: process.env.NODE_ENV ?? "development",
    database: sequelize.getDialect(),
    timestamp: new Date().toISOString(),
  });
});

export default healthRouter;
