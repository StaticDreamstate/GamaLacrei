import { Router } from "express";

import userRoutes from "../../modules/Profissionais/routes";
import authRoutes from "../../modules/Auth/routes";

const routes = Router();

routes.use(userRoutes);
routes.use(authRoutes);

export default routes;
