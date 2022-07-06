import { Router } from "express";
import { profissionalControlador } from "../controlador.ts";

const routes = Router();

routes.post("/", profissionalControlador.create());
routes.get("/", profissionalControlador.listar());

export default routes;