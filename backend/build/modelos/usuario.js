"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const permissoes_1 = __importDefault(require("../constantes/permissoes"));
class Usuario {
    constructor(conexao) {
        this.nomeModelo = "usuario";
        const con = conexao.getIstance();
        this.instancia = con.define(this.nomeModelo, {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nivel: {
                type: sequelize_1.DataTypes.INTEGER,
                defaultValue: permissoes_1.default.USUARIO,
            },
            nome: {
                type: sequelize_1.DataTypes.STRING,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
            },
            senha: {
                type: sequelize_1.DataTypes.STRING(300),
            },
            hashResetSenha: {
                type: sequelize_1.DataTypes.STRING(300),
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            },
        }, {
            tableName: this.nomeModelo.toLowerCase(),
        });
    }
}
exports.Usuario = Usuario;
;
