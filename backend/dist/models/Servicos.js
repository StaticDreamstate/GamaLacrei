"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicos = void 0;
const sequelize_1 = require("sequelize");
class Servicos {
    constructor(conexao) {
        this.modelName = "Servicos";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            duracao: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
            },
            valor: {
                type: sequelize_1.DataTypes.DOUBLE,
                allowNull: true,
            },
            tipoConsulta: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
        }, {
            tableName: "servicos",
        });
    }
}
exports.Servicos = Servicos;
