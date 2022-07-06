import { Router } from "express";

import rotaCadastro from "../../modulos/Cadastro/rotaCadastro";
import rotasLogin from "../../modulos/Login/rotasLogin";

const rotas = Router();

rotas.use(rotaCadastro);
rotas.use(rotasLogin);

export default rotas;

