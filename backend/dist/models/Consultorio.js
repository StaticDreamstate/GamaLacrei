"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultorio = void 0;
const sequelize_1 = require("sequelize");
class Consultorio {
    constructor(conexao) {
        this.modelName = "Consultorio";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            endereco_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: { model: "enderecos", key: "id" }
            },
            celular: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            fixo: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            whatsapp: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            tipoConsulta: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            acessibilidade: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            horarioFuncionamento: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            convenios: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: false,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
        }, {
            tableName: "consultorio",
        });
    }
}
exports.Consultorio = Consultorio;
