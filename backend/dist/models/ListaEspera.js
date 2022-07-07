"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaEspera = void 0;
const sequelize_1 = require("sequelize");
class ListaEspera {
    constructor(conexao) {
        this.modelName = "ListaEspera";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
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
        }, {
            tableName: "lista_de_espera",
        });
    }
}
exports.ListaEspera = ListaEspera;
