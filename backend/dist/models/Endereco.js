"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enderecos = void 0;
const sequelize_1 = require("sequelize");
class Enderecos {
    constructor(conexao) {
        this.modelName = "Enderecos";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            rua: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            numero: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
            },
            bairro: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true,
            },
            cidade: {
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
            tableName: "enderecos",
        });
    }
}
exports.Enderecos = Enderecos;
