import { Router } from "express";

import rotaCadastro from "../../modulos/Cadastro/rotaCadastro";
import rotasLogin from "../../modulos/Login/rotasLogin";
import rotaProfissional from "../../modulos/Profissional/rotas";

const rotas = Router();

rotas.use(rotaCadastro);
rotas.use(rotasLogin);
rotas.use("/profissional", rotaProfissional);

export default rotas;

