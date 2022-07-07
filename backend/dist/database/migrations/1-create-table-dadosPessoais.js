"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("dados_pessoais", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            foto: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            fotoDescricao: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            sobre: {
                type: sequelize_1.DataTypes.STRING(300),
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
        return queryInterface.dropTable("dados_pessoais");
    },
};
