import { Router } from "express";

import healthRouter from "./health.routes";
import siteRouter from "./site.routes";
import userRouter from "./user.routes";
import workTrackingRouter from "./work-tracking.routes";

const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/site", siteRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/work-tracking", workTrackingRouter);

export default apiRouter;
