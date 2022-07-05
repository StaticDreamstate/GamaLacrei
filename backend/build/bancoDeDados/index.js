"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexaoMysql = void 0;
const Conexao_1 = __importDefault(require("./Conexao"));
const ambiente_1 = __importDefault(require("../infra/configuracoes/ambiente"));
const conexaoMysql = new Conexao_1.default(ambiente_1.default.NOME_BD, ambiente_1.default.USUARIO_BD, ambiente_1.default.SENHA_BD, {
    dialect: "mysql",
    port: ambiente_1.default.PORTA_BD,
    host: ambiente_1.default.HOST_BD
});
exports.conexaoMysql = conexaoMysql;
