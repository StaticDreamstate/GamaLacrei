"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ambiente_1 = __importDefault(require("./ambiente"));
const bd = {
    username: ambiente_1.default.USUARIO_BD,
    password: ambiente_1.default.SENHA_BD,
    database: ambiente_1.default.NOME_BD,
    host: ambiente_1.default.HOST_BD,
    dialect: "mysql",
};
console.log(bd);
module.exports = bd;
