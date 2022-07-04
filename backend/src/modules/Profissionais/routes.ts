import { Router } from "express";
import auth from "../../infra/middlewares/auth";

import controller from "./controller";
const routes = Router();

routes.post("/cadastro", controller.cadastro);

export default routes;