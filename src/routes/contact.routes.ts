import { Router } from "express";

import { contactOverview } from "../data/contact-review";
import { ContactInquiry } from "../models/ContactInquiry";

const contactRouter = Router();

contactRouter.get("/overview", (_req, res) => {
  res.json({
    data: contactOverview,
  });
});

contactRouter.post("/inquiries", async (req, res) => {
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

  const inquiryId = `inq-${String((await ContactInquiry.count()) + 1).padStart(4, "0")}`;
  const inquiry = await ContactInquiry.create({
    inquiryId,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    topic: topic.trim(),
    message: message.trim(),
    status: "new",
  });

  return res.status(201).json({
    data: {
      id: inquiry.inquiryId,
      createdAt: inquiry.createdAt,
    },
  });
});

export default contactRouter;
