import { Router } from "express";
import * as preCadastroController  from "./controller";
import preCadastroValidator from "./validator";

const routes = Router();

routes.get("/lista-pendentes", preCadastroController.listarPendentes);
routes.post("/pre-cadastro", preCadastroValidator, preCadastroController.cadastrar);

export default routes;
