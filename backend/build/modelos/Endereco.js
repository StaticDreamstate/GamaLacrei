"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
const sequelize_1 = require("sequelize");
class Endereco {
    constructor(conexao) {
        this.nomeModelo = "Endereco";
        const con = conexao.getInstance();
        this.instancia = con.define(this.nomeModelo, {
            id: {
                type: sequelize_1.DataTypes.INTEGER(),
                primaryKey: true,
                autoIncrement: true,
            },
            rua: {
                type: sequelize_1.DataTypes.STRING(45),
            },
            numero: {
                type: sequelize_1.DataTypes.STRING(5),
            },
            complemento: {
                type: sequelize_1.DataTypes.STRING(45),
            },
            bairro: {
                type: sequelize_1.DataTypes.STRING(45),
            },
            cidade: {
                type: sequelize_1.DataTypes.STRING(45),
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
        }, {
            tableName: this.nomeModelo.toLowerCase(),
        });
    }
}
exports.Endereco = Endereco;
