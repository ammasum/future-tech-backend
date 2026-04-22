import { Router } from "express";
import { Op } from "sequelize";

import { hashPasscode, verifyPasscode } from "../lib/passcode";
import { ClientAccount } from "../models/ClientAccount";

const clientPortalRouter = Router();

clientPortalRouter.post("/login", async (req, res) => {
  const { emailOrPhone, passcode } = req.body as {
    emailOrPhone?: string;
    passcode?: string;
  };

  if (!emailOrPhone || !passcode) {
    return res.status(400).json({
      message: "emailOrPhone and passcode are required",
    });
  }

  const normalizedIdentity = emailOrPhone.trim().toLowerCase();
  const account = await ClientAccount.findOne({
    where: {
      [Op.or]: [
        { email: normalizedIdentity },
        { phone: emailOrPhone.trim() },
      ],
    },
  });

  if (!account || !verifyPasscode(passcode.trim(), account.passcodeHash)) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  return res.json({
    data: {
      id: account.portalId,
      name: account.name,
      email: account.email,
      phone: account.phone,
      company: account.company,
    },
  });
});

clientPortalRouter.post("/register", async (req, res) => {
  const { name, phone, email, passcode } = req.body as {
    name?: string;
    phone?: string;
    email?: string;
    passcode?: string;
  };

  if (!name || !phone || !email || !passcode) {
    return res.status(400).json({
      message: "name, phone, email, and passcode are required",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPhone = phone.trim();

  const existingAccount = await ClientAccount.findOne({
    where: {
      [Op.or]: [
        { email: normalizedEmail },
        { phone: normalizedPhone },
      ],
    },
  });

  if (existingAccount) {
    return res.status(409).json({
      message: "An account already exists for this email or phone",
    });
  }

  const portalId = `client-${String((await ClientAccount.count()) + 1).padStart(3, "0")}`;
  const account = await ClientAccount.create({
    portalId,
    name: name.trim(),
    phone: normalizedPhone,
    email: normalizedEmail,
    passcodeHash: hashPasscode(passcode.trim()),
    company: "Pending assignment",
  });

  return res.status(201).json({
    data: {
      id: account.portalId,
      name: account.name,
      email: account.email,
      phone: account.phone,
      company: account.company,
    },
  });
});

clientPortalRouter.post("/recover", async (req, res) => {
  const { emailOrPhone } = req.body as {
    emailOrPhone?: string;
  };

  if (!emailOrPhone) {
    return res.status(400).json({
      message: "emailOrPhone is required",
    });
  }

  return res.json({
    data: {
      message:
        "If an account exists for that contact, a recovery workflow can now continue from the backend.",
    },
  });
});

export default clientPortalRouter;
