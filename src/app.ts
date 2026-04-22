import express, { NextFunction, Request, Response } from "express";

import apiRouter from "./routes";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Future Tech API is running",
  });
});

app.use("/api/v1", apiRouter);

app.use((_req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use(
  (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  },
);

export default app;
