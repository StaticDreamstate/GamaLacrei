import { DataTypes } from "sequelize";
import Conexao from "../bancoDeDados/Conexao";

export class Endereco {
  instancia: any;
  nomeModelo: string = "Endereco";

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
        rua: {
          type: DataTypes.STRING(45),
        },
        numero: {
          type: DataTypes.STRING(5),
        },
        complemento: {
          type: DataTypes.STRING(45),
        },
        bairro: {
          type: DataTypes.STRING(45),
        },
        cidade: {
          type: DataTypes.STRING(45),
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
