import { Router } from "express";

import rotaCadastro from "../../modules/Cadastro/rotaCadastro"; //Cadastro

const rotas = Router();

rotas.use(rotaCadastro);

export default rotas;

