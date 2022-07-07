"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("consultorio", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            endereco_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
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
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("consultorio");
    },
};
