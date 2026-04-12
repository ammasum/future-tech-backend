import { Router } from "express";

import { User } from "../models/User";

const userRouter = Router();

userRouter.get("/", async (_req, res) => {
  const users = await User.findAll({
    order: [["id", "ASC"]],
  });

  res.json({ data: users });
});

userRouter.post("/", async (req, res) => {
  const { name, email } = req.body as {
    name?: string;
    email?: string;
  };

  if (!name || !email) {
    return res.status(400).json({
      message: "name and email are required",
    });
  }

  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    return res.status(409).json({
      message: "email already exists",
    });
  }

  const user = await User.create({ name, email });

  return res.status(201).json({ data: user });
});

export default userRouter;
