import { Router } from "express";

import {
  workTrackingStatuses,
} from "../data/work-tracking";
import { WorkTicket } from "../models/WorkTicket";

const workTrackingRouter = Router();

workTrackingRouter.get("/statuses", (_req, res) => {
  res.json({
    data: workTrackingStatuses,
  });
});

workTrackingRouter.get("/tickets", async (_req, res) => {
  const tickets = await WorkTicket.findAll({
    order: [["lastUpdatedAt", "DESC"]],
  });

  res.json({
    data: tickets.map((ticket) => ({
      ticketId: ticket.ticketId,
      clientName: ticket.clientName,
      projectType: ticket.projectType,
      serviceLane: ticket.serviceLane,
      location: ticket.location,
      status: ticket.status,
      assignedTeam: ticket.assignedTeam,
      startedAt: ticket.startedAt,
      updatedAt: ticket.lastUpdatedAt,
      latestUpdate: ticket.latestUpdate,
    })),
  });
});

workTrackingRouter.get("/:ticketId", async (req, res) => {
  const ticketId = req.params.ticketId?.trim().toUpperCase();

  if (!ticketId) {
    return res.status(400).json({ message: "ticketId is required" });
  }

  const ticket = await WorkTicket.findOne({
    where: { ticketId },
  });

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  return res.json({
    data: {
      ticketId: ticket.ticketId,
      clientName: ticket.clientName,
      projectType: ticket.projectType,
      serviceLane: ticket.serviceLane,
      location: ticket.location,
      status: ticket.status,
      assignedTeam: ticket.assignedTeam,
      startedAt: ticket.startedAt,
      updatedAt: ticket.lastUpdatedAt,
      latestUpdate: ticket.latestUpdate,
      notes: ticket.notes,
    },
  });
});

export default workTrackingRouter;
