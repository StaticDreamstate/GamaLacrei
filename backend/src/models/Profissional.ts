import { DataTypes } from "sequelize";
import Conexao from "../database/Conexao";

export class Profissional {
  instancia: any;
  nomeModelo: string = "Profissional";

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
        nome_completo: {
          type: DataTypes.INTEGER(),
        },
        email: {
          type: DataTypes.STRING(200),
          unique: true,
        },
        estado: {
          type: DataTypes.STRING(20),
        },
        profissao: {
          type: DataTypes.STRING(45),
        },
        prefixo_profissional: {
          type: DataTypes.STRING(10),
        },
        registro_profissional: {
          type: DataTypes.STRING(45),
        },
        senha: {
          type: DataTypes.STRING(255),
        },
        hashResetSenha: {
          type: DataTypes.STRING(255),
        },
        foto_perfil: {
          type: DataTypes.STRING(255),
        },
        descricao_foto: {
          type: DataTypes.STRING(255),
        },
        sobre_mim: {
          type: DataTypes.STRING(255),
        },
        especialidade_clinica: {
          type: DataTypes.STRING(45),
        },
        foto_identificacao: {
          type: DataTypes.DATE(255),
        },
        carta_entrada: {
          type: DataTypes.DATE(255),
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
