import { Router } from "express";

import rotaCadastro from "../../modulos/Cadastro/rotaCadastro";

const rotas = Router();

rotas.use(rotaCadastro);

export default rotas;

