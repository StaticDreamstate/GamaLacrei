"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profissional = void 0;
const sequelize_1 = require("sequelize");
class Profissional {
    constructor(conexao) {
        this.nomeModelo = "Profissional";
        const con = conexao.getInstance();
        this.instancia = con.define(this.nomeModelo, {
            id: {
                type: sequelize_1.DataTypes.INTEGER(),
                primaryKey: true,
                autoIncrement: true,
            },
            nome_completo: {
                type: sequelize_1.DataTypes.INTEGER(),
            },
            email: {
                type: sequelize_1.DataTypes.STRING(200),
                unique: true,
            },
            estado: {
                type: sequelize_1.DataTypes.STRING(2),
            },
            profissao: {
                type: sequelize_1.DataTypes.STRING(45),
            },
            prefixo_profissao: {
                type: sequelize_1.DataTypes.STRING(10),
            },
            registro_profissao: {
                type: sequelize_1.DataTypes.STRING(45),
            },
            senha: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            hashResetSenha: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            foto_perfil: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            descricao_foto: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            sobre_mim: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            especialidade_clinica: {
                type: sequelize_1.DataTypes.STRING(45),
            },
            foto_identificacao: {
                type: sequelize_1.DataTypes.DATE(255),
            },
            carta_entrada: {
                type: sequelize_1.DataTypes.DATE(255),
            },
            consultorio_id: {
                type: sequelize_1.DataTypes.INTEGER(),
                references: { model: "consultorio", key: "id" },
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
        }, {
            tableName: this.nomeModelo.toLowerCase(),
        });
    }
}
exports.Profissional = Profissional;
