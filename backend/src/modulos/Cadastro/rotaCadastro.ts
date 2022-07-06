import { Router } from "express";
import controlador from "./controlador";

const rotaCadastro = Router();

rotaCadastro.post("/cadastro", controlador.cadastro);

export default rotaCadastro;