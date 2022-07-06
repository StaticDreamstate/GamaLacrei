"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
const sequelize_1 = require("sequelize");
class Servico {
    constructor(conexao) {
        this.nomeModelo = "Servico";
        const con = conexao.getInstance();
        this.instancia = con.define(this.nomeModelo, {
            id: {
                type: sequelize_1.DataTypes.INTEGER(),
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: sequelize_1.DataTypes.STRING(200),
            },
            duracao: {
                type: sequelize_1.DataTypes.INTEGER(),
            },
            valor: {
                type: sequelize_1.DataTypes.STRING(10),
            },
            modalidade: {
                type: sequelize_1.DataTypes.STRING(45),
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
exports.Servico = Servico;
