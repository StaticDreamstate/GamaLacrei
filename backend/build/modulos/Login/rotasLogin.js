"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = __importDefault(require("./controlador"));
const rotas = (0, express_1.Router)();
rotas.post("/login", controlador_1.default.login);
rotas.post("/reset-senha", controlador_1.default.gerarTokenDeSenha);
rotas.post("/recuperar-senha", controlador_1.default.recuperarSenha);
exports.default = rotas;
