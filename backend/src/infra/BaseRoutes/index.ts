import { Router } from "express";

import listaDeEspera from "../../modules/listaDeEspera/routes";
import preCadastro from "../../modules/preCadastro/routes";

const routes = Router();

routes.use(listaDeEspera);
routes.use(preCadastro);

export default routes;
