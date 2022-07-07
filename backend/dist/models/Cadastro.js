"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cadastro = void 0;
const sequelize_1 = require("sequelize");
class Cadastro {
    constructor(conexao) {
        this.modelName = "Cadastro";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
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
                references: { model: "dados_pessoais", key: "id" },
            },
            dadosProfissionais_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: { model: "dados_profissionais", key: "id" },
            },
            consultorio_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: { model: "consultorio", key: "id" },
            },
            servico_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: { model: "servicos", key: "id" },
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
        }, {
            tableName: "cadastro",
        });
    }
}
exports.Cadastro = Cadastro;
