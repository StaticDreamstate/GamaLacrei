"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("../controlador");
const rotaProfissional = (0, express_1.Router)();
rotaProfissional.post("/", controlador_1.profissionalControlador.criar());
rotaProfissional.get("/", controlador_1.profissionalControlador.listarTodos());
exports.default = rotaProfissional;
