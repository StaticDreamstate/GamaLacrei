import { Profissional } from "../../modelos/Profissional";
import IRepositorio from "../IRepositorio";

export default class ProfissionalRepositorio implements IRepositorio {
  private profissionalModelo: any;

  constructor(profissionalModelo: Profissional) {
    this.profissionalModelo = profissionalModelo;
  }

  async criar(payload: {
    estado: string;
    nome_completo: string;
    email: string;
    profissao: string;
    prefixo_profissional: string;
    registro_profissional: string;
    senha: string;
  }) {
    return this.profissionalModelo.instancia.create(payload);
  }
  async atualizar() {}
  async listarUm() {}
  async listarTodos() {
    return this.profissionalModelo.instancia.findAll();
  }

  async deletar() {}
}
