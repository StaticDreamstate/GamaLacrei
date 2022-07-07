"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosPessoais = void 0;
const sequelize_1 = require("sequelize");
class DadosPessoais {
    constructor(conexao) {
        this.modelName = "DadosPessoais";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
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
        }, {
            tableName: "dados_pessoais",
        });
    }
}
exports.DadosPessoais = DadosPessoais;
