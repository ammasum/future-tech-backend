import { Router } from "express";

import {
  workTickets,
  workTrackingStatuses,
} from "../data/work-tracking";

const workTrackingRouter = Router();

workTrackingRouter.get("/statuses", (_req, res) => {
  res.json({
    data: workTrackingStatuses,
  });
});

workTrackingRouter.get("/:ticketId", (req, res) => {
  const ticketId = req.params.ticketId?.trim().toUpperCase();

  const ticket = workTickets.find(
    (entry) => entry.ticketId.toUpperCase() === ticketId,
  );

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  return res.json({
    data: ticket,
  });
});

export default workTrackingRouter;
