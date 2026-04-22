import { Router } from "express";

import { clientPortalAccounts } from "../data/client-portal";

const clientPortalRouter = Router();

clientPortalRouter.post("/login", (req, res) => {
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
  const account = clientPortalAccounts.find((entry) => {
    return (
      entry.email.toLowerCase() === normalizedIdentity ||
      entry.phone.toLowerCase() === normalizedIdentity
    );
  });

  if (!account || account.passcode !== passcode.trim()) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  return res.json({
    data: {
      id: account.id,
      name: account.name,
      email: account.email,
      phone: account.phone,
      company: account.company,
    },
  });
});

clientPortalRouter.post("/register", (req, res) => {
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

  const existingAccount = clientPortalAccounts.find((entry) => {
    return (
      entry.email.toLowerCase() === normalizedEmail ||
      entry.phone === normalizedPhone
    );
  });

  if (existingAccount) {
    return res.status(409).json({
      message: "An account already exists for this email or phone",
    });
  }

  const newAccount = {
    id: `client-${String(clientPortalAccounts.length + 1).padStart(3, "0")}`,
    name: name.trim(),
    phone: normalizedPhone,
    email: normalizedEmail,
    passcode: passcode.trim(),
    company: "Pending assignment",
  };

  clientPortalAccounts.push(newAccount);

  return res.status(201).json({
    data: {
      id: newAccount.id,
      name: newAccount.name,
      email: newAccount.email,
      phone: newAccount.phone,
      company: newAccount.company,
    },
  });
});

clientPortalRouter.post("/recover", (req, res) => {
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
