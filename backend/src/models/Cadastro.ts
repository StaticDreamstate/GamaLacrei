import { DataTypes } from "sequelize";
import Connection from "../database/Connection";

export class Cadastro {
  instance: any;
  modelName: string = "Cadastro";

  constructor(conexao: Connection) {
    const con = conexao.getInstance();

    this.instance = con.define(
      this.modelName,
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          unique: true,
          allowNull: false,
        },
        profissao: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        registro: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true
        },
        senha: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        aprovado: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        dadosPessoais_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: { model: "dados_pessoais", key: "id" },
        },
        dadosProfissionais_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: { model: "dados_profissionais", key: "id" },
        },
        consultorio_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: { model: "consultorio", key: "id" },
        },
        servico_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: { model: "servicos", key: "id" },
        },
        createdAt: {
          type: DataTypes.DATE(),
        },
        updatedAt: {
          type: DataTypes.DATE(),
        },
      },
      {
        tableName: "cadastro",
      }
    );
  }
}
