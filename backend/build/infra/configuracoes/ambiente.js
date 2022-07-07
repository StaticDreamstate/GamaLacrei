"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const ambiente = {
    NOME_BD: process.env.NOME_BD,
    HOST_BD: process.env.HOST_BD,
    PORTA_BD: Number(process.env.PORTA_BD),
    USUARIO_BD: process.env.USUARIO_BD,
    SENHA_BD: process.env.SENHA_BD,
    USUARIO_EMAIL: process.env.USUARIO_EMAIL,
    SENHA_EMAIL: process.env.SENHA_EMAIL
};
exports.default = ambiente;
