import { Router } from "express";
import controlador from "./controlador";

const rotaCadastro = Router();

rotaCadastro.post("/cadastro", controlador.cadastro);
rotaCadastro.post("/cadastro/dados-pessoais", controlador.cadastro);
rotaCadastro.post("/cadastro/dados-profissionais", controlador.cadastro);
rotaCadastro.post("/cadastro/consultorio", controlador.cadastro);
rotaCadastro.post("/cadastro/serviços", controlador.cadastro);

export default rotaCadastro;