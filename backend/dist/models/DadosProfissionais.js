"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosProfissionais = void 0;
const sequelize_1 = require("sequelize");
class DadosProfissionais {
    constructor(conexao) {
        this.modelName = "DadosProfissionais";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
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
        }, {
            tableName: "dados_profissionais",
        });
    }
}
exports.DadosProfissionais = DadosProfissionais;
