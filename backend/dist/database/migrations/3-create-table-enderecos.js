"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("enderecos", {
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
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("enderecos");
    },
};
