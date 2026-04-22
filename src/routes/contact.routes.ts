import { Router } from "express";

import {
  contactInquiries,
  contactOverview,
} from "../data/contact-review";

const contactRouter = Router();

contactRouter.get("/overview", (_req, res) => {
  res.json({
    data: contactOverview,
  });
});

contactRouter.post("/inquiries", (req, res) => {
  const { name, email, phone, topic, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    topic?: string;
    message?: string;
  };

  if (!name || !email || !phone || !topic || !message) {
    return res.status(400).json({
      message: "name, email, phone, topic, and message are required",
    });
  }

  const inquiry = {
    id: `inq-${String(contactInquiries.length + 1).padStart(4, "0")}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    topic: topic.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  contactInquiries.push(inquiry);

  return res.status(201).json({
    data: inquiry,
  });
});

export default contactRouter;
