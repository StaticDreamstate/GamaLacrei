import { Router } from "express";
import controlador from "./controlador";
const rotas = Router();

rotas.post("/login", controlador.login);
rotas.post("/reset-senha", controlador.gerarTokenDeSenha);
rotas.post("/recuperar-senha", controlador.recuperarSenha);

export default rotas;

