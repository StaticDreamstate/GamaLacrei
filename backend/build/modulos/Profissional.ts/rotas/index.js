"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_ts_1 = require("../controlador.ts");
const routes = (0, express_1.Router)();
routes.post("/", controlador_ts_1.profissionalControlador.create());
routes.get("/", controlador_ts_1.profissionalControlador.listar());
exports.default = routes;
