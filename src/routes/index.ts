import { Router } from "express";

import healthRouter from "./health.routes";
import siteRouter from "./site.routes";
import userRouter from "./user.routes";

const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/site", siteRouter);
apiRouter.use("/users", userRouter);

export default apiRouter;
