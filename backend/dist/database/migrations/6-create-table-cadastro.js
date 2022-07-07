"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("cadastro", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                unique: true,
                allowNull: false,
            },
            profissao: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: false,
            },
            registro: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
                unique: true
            },
            senha: {
                type: sequelize_1.DataTypes.STRING(300),
                allowNull: false,
            },
            aprovado: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true,
            },
            dadosPessoais_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
            },
            dadosProfissionais_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
            },
            consultorio_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
            },
            servicos_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
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
        return queryInterface.dropTable("cadastro");
    },
};
