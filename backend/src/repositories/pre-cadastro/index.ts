import { Cadastro } from "../../models/Cadastro";
import IRepository from "../IRepository";

export default class PreCadastroRepository implements IRepository {
  private cadastroModel: any;

  constructor(cadastroModel: Cadastro) {
    this.cadastroModel = cadastroModel.instance;
  }

  async create(payload: object) {
    console.log("Cadastrando: "+payload);
  }
  update() {}
  find() {}
  async findAll() {
    return this.cadastroModel.findAll({
      where: {
        aprovado: false
      }
    });
  }
  delete() {}
}
