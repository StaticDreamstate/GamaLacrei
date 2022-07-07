"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("servicos", {
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
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("servicos");
    },
};
