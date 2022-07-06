"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rotaCadastro_1 = __importDefault(require("../../modulos/Cadastro/rotaCadastro"));
const rotasLogin_1 = __importDefault(require("../../modulos/Login/rotasLogin"));
const rotas = (0, express_1.Router)();
rotas.use(rotaCadastro_1.default);
rotas.use(rotasLogin_1.default);
exports.default = rotas;
