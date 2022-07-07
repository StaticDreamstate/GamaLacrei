"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("lista_de_espera", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            profissao: {
                type: sequelize_1.DataTypes.STRING(50),
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
        return queryInterface.dropTable("lista_de_espera");
    },
};
