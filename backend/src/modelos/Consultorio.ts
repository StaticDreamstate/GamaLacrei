import { DataTypes } from "sequelize";
import Conexao from "../bancoDeDados/Conexao";

export class Consultorio {
  instancia: any;
  nomeModelo: string = "Consultorio";

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
        telefone_fixo: {
          type: DataTypes.STRING(20),
        },
        telefone_celular: {
          type: DataTypes.STRING(20),
        },
        whatsapp: {
          type: DataTypes.STRING(20),
        },
        modalidade_atendimento: {
          type: DataTypes.STRING(255),
        },
        acessibilidade: {
          type: DataTypes.STRING(255),
        },
        horarios_funcionamento: {
          type: DataTypes.STRING(255),
        },
        convenios: {
          type: DataTypes.STRING(255),
        },
        endereco_id: {
          type: DataTypes.INTEGER(),
          references: { model: "endereco", key: "id" },
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
