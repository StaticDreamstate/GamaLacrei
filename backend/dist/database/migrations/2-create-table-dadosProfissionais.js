"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("dados_profissionais", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            especialidade: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            carta: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: false,
            },
            foto: {
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
        return queryInterface.dropTable("dados_profissionais");
    },
};
