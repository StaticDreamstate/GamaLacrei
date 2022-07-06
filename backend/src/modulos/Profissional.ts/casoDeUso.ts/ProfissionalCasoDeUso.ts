import { profissionalRepositorio } from "../../../repositorios";
import IRepositorio from "../../../repositorios/IRepositorio";

type CadastrarProfissionalPayload = {
  id: number;
  estado: string;
  nome_completo: string;
  email: string;
  profissao: string;
  prefixo_profissao: string;
  registro_profissao: string;
  senha: string;
};

type ListarPayload = {
  ativo: boolean;
};
export default class ProfissionalCasoDeUso {
  private repository: IRepositorio;

  constructor(ProfissionalRepositorio: IRepositorio) {
    this.repository = profissionalRepositorio;
  }

  cadastrarProfissional(payload: CadastrarProfissionalPayload) {
    const novoProfissional = this.repository.create(payload);

    return novoProfissional;
  }

  listarProfissional(payload?: ListarPayload) {
    const lista = this.repository.findAll(payload);
    return lista;
  }

  atualizarProfissional() {
  }
}
