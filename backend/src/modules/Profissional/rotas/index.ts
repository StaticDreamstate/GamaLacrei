import { Router } from "express";
import { profissionalControlador } from "../controlador";

const rotaProfissional = Router();

rotaProfissional.post("/", profissionalControlador.criar());
rotaProfissional.get("/", profissionalControlador.listarTodos());

export default rotaProfissional;