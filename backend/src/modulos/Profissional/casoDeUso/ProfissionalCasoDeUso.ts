import IRepositorio from "../../../repositorios/IRepositorio";
import { criptografia } from "../../../adaptadores/criptografia";

type CadastrarProfissionalPayload = {
  estado: string;
  nome_completo: string;
  email: string;
  profissao: string;
  prefixo_profissional: string;
  registro_profissional: string;
  senha: string;
};


export default class ProfissionalCasoDeUso {
  private repository: IRepositorio;

  constructor(ProfissionalRepositorio: IRepositorio) {
    this.repository = ProfissionalRepositorio;
  }

  cadastrarProfissional(payload: CadastrarProfissionalPayload) {
    const novaSenha = criptografia.hash(payload.senha);
    const novoProfissional = this.repository.criar(payload);

    return novoProfissional;
  }

  listarProfissional() {
    const lista = this.repository.listarTodos();
    return lista;
  }

  atualizarProfissional() {
  }
}
