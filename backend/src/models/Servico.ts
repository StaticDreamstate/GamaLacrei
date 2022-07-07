import { DataTypes } from "sequelize";
import Conexao from "../database/Conexao";

export class Servico {
  instancia: any;
  nomeModelo: string = "Servico";

  constructor(conexao: Conexao) {
    const con = conexao.getInstance();

    this.instancia = con.define(
      this.nomeModelo,
      {
        id: {
          type: DataTypes.INTEGER(),
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING(200),
        },
        duracao: {
          type: DataTypes.INTEGER(),
        },
        valor: {
          type: DataTypes.STRING(10),
        },
        modalidade: {
          type: DataTypes.STRING(45),
        },
        consultorio_id: {
          type: DataTypes.INTEGER(),
          references: { model: "consultorio", key: "id" },
        },
        createdAt: {
          type: DataTypes.DATE(),
        },
        updatedAt: {
          type: DataTypes.DATE(),
        },
      },

      {
        tableName: this.nomeModelo.toLowerCase(),
      }
    );
  }
}
