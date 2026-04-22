import { Router } from "express";

import {
  equipmentPageContent,
  homePageContent,
  servicesPageContent,
  siteMeta,
} from "../data/site-content";
import { EquipmentCategory } from "../models/EquipmentCategory";
import { EquipmentItem } from "../models/EquipmentItem";

const siteRouter = Router();

siteRouter.get("/meta", (_req, res) => {
  res.json({ data: siteMeta });
});

siteRouter.get("/home", (_req, res) => {
  res.json({ data: homePageContent });
});

siteRouter.get("/services", (_req, res) => {
  res.json({ data: servicesPageContent });
});

siteRouter.get("/equipment", async (_req, res) => {
  const categories = await EquipmentCategory.findAll({
    order: [["id", "ASC"]],
  });
  const items = await EquipmentItem.findAll({
    order: [["id", "ASC"]],
  });

  res.json({
    data: {
      siteConfig: siteMeta.siteConfig,
      categories: categories.map((category) => ({
        slug: category.slug,
        title: category.title,
        description: category.description,
      })),
      items: items.map((item) => ({
        id: item.itemId,
        name: item.name,
        category:
          categories.find((category) => category.id === item.categoryId)?.slug ??
          "uncategorized",
        specSummary: item.specSummary,
        deploymentFit: item.deploymentFit,
        imageLabel: item.imageLabel,
        specs: item.specs,
      })),
      promotionalOffer: equipmentPageContent.promotionalOffer,
    },
  });
});

export default siteRouter;
