import { DataTypes } from "sequelize";
import permissoes from "../constantes/permissoes";
import Conexao from "../bancoDeDados/Conexao";

export class Usuario {
    instancia: any;
    nomeModelo: string = "usuario";

    constructor(conexao: Conexao) {
        const con = conexao.getIstance();

    this.instancia = con.define(
        this.nomeModelo, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              nivel: {
                type: DataTypes.INTEGER,
                defaultValue: permissoes.USUARIO,
              },
              nome: {
                type: DataTypes.STRING,
              },
              email: {
                type: DataTypes.STRING,
              },
              senha: {
                type: DataTypes.STRING(300),
              },
              hashResetSenha: {
                type: DataTypes.STRING(300),
              },
              createdAt: {
                type: DataTypes.DATE,
              },
              updatedAt: {
                type: DataTypes.DATE,
              },
        },
        {
            tableName: this.nomeModelo.toLowerCase(),
        }
    );
    }
};