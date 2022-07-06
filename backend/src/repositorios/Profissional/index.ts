import { Profissional } from "../../modelos/Profissional";
import IRepositorio from "../IRepositorio";

export default class ProfissionalRepository implements IRepositorio {
  private profissionalModelo: any;

  constructor(profissionalModelo: Profissional) {
    this.profissionalModelo = profissionalModelo.nomeModelo;
  }

  async create(payload: {
    estado: string;
    nome_completo: string;
    email: string;
    profissao: string;
    prefixo_profissao: string;
    registro_profissao: string;
    senha: string;
  }) {
    return this.profissionalModelo.create(payload);
  }
  async update() {}
  async find() {}
  async findAll(payload: any) {
    let filter = {};

    if (payload.ativo) {
      Object.assign(filter, {
        where: {
          ativo: true,
        },
      });
    }

    return this.profissionalModelo.findAll(filter);
  }
  async delete() {}
}
