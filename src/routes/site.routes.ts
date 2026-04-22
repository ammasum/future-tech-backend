import { Router } from "express";

import {
  equipmentPageContent,
  homePageContent,
  servicesPageContent,
  siteMeta,
} from "../data/site-content";

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

siteRouter.get("/equipment", (_req, res) => {
  res.json({ data: equipmentPageContent });
});

export default siteRouter;
