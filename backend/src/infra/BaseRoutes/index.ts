import { Router } from "express";

import listaDeEspera from "../../modules/listaDeEspera/routes";
import preCadastro from "../../modules/preCadastro/routes";
import login from "../../modules/login/routes";
const routes = Router();

routes.use(listaDeEspera);
routes.use(preCadastro);
routes.use(login);

export default routes;
