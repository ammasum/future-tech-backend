import { clientPortalAccounts } from "./client-portal";
import { equipmentPageContent } from "./site-content";
import { workTickets } from "./work-tracking";
import { hashPasscode } from "../lib/passcode";
import { ClientAccount } from "../models/ClientAccount";
import { EquipmentCategory } from "../models/EquipmentCategory";
import { EquipmentItem } from "../models/EquipmentItem";
import { WorkTicket } from "../models/WorkTicket";

export async function seedDatabase() {
  if ((await ClientAccount.count()) === 0) {
    await ClientAccount.bulkCreate(
      clientPortalAccounts.map((account) => ({
        portalId: account.id,
        name: account.name,
        phone: account.phone,
        email: account.email,
        passcodeHash: hashPasscode(account.passcode),
        company: account.company,
      })),
    );
  }

  if ((await WorkTicket.count()) === 0) {
    await WorkTicket.bulkCreate(
      workTickets.map((ticket) => ({
        ticketId: ticket.ticketId,
        clientName: ticket.clientName,
        projectType: ticket.projectType,
        serviceLane: ticket.serviceLane,
        location: ticket.location,
        status: ticket.status,
        assignedTeam: ticket.assignedTeam,
        startedAt: new Date(ticket.startedAt),
        lastUpdatedAt: new Date(ticket.updatedAt),
        latestUpdate: ticket.latestUpdate,
        notes: ticket.notes,
      })),
    );
  }

  if ((await EquipmentCategory.count()) === 0) {
    await EquipmentCategory.bulkCreate(
      equipmentPageContent.categories.map((category) => ({
        slug: category.slug,
        title: category.title,
        description: category.description,
      })),
    );
  }

  if ((await EquipmentItem.count()) === 0) {
    const categories = await EquipmentCategory.findAll();
    const categoryIdBySlug = new Map(
      categories.map((category) => [category.slug, category.id]),
    );

    await EquipmentItem.bulkCreate(
      equipmentPageContent.items.map((item) => ({
        itemId: item.id,
        name: item.name,
        categoryId: categoryIdBySlug.get(item.category) as number,
        specSummary: item.specSummary,
        deploymentFit: item.deploymentFit,
        imageLabel: item.imageLabel,
        specs: item.specs,
      })),
    );
  }
}
