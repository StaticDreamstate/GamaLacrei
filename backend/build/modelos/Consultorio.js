"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultorio = void 0;
const sequelize_1 = require("sequelize");
class Consultorio {
    constructor(conexao) {
        this.nomeModelo = "Consultorio";
        const con = conexao.getInstance();
        this.instancia = con.define(this.nomeModelo, {
            id: {
                type: sequelize_1.DataTypes.INTEGER(),
                primaryKey: true,
                autoIncrement: true,
            },
            telefone_fixo: {
                type: sequelize_1.DataTypes.STRING(20),
            },
            telefone_celular: {
                type: sequelize_1.DataTypes.STRING(20),
            },
            whatsapp: {
                type: sequelize_1.DataTypes.STRING(20),
            },
            modalidade_atendimento: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            acessibilidade: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            horarios_funcionamento: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            convenios: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            endereco_id: {
                type: sequelize_1.DataTypes.INTEGER(),
                references: { model: "endereco", key: "id" },
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
exports.Consultorio = Consultorio;
