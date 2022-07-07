import { Router } from "express";
import * as ListaDeEsperaController from "./controller";
import ListaDeEsperaValidator from "./validator";

const routes = Router();

routes.post("/lista-espera", ListaDeEsperaValidator, ListaDeEsperaController.cadastrar);

export default routes;
