import { DivDadosProfissionais } from "./dados-profissionais.style";

export function DadosProfissionais() {
  return (
    <>
      <DivDadosProfissionais>
        <form>
          <div className="botao">
            <button>Add Foto</button>
            <a href="#"></a>
          </div>
          <div className="field">
            <label htmlFor="name">Profissão *</label>
            <input type="text" name="profissao" id="profissao" />
          </div>
          <div className="field">
            <label htmlFor="numeroConcelho">
              Número de Inscrição do Conselho de Classe *
            </label>
            <input type="text" name="numeroConcelho" id="numeroConcelho" />
          </div>
          <div className="field">
            <label htmlFor="especialidade">Especialidade Clínica *</label>
            <input type="text" name="especialidade" id="especialidade" />
          </div>
          <div className="field">
            <label htmlFor="CartaDeEntrada">Carta de entrada</label>
            <input type="text" name="cartaentrada" id="cartaentrada" />
            <span>
              Escreva o porquê gostaria de atuar no atendimento a comunidade
              LGBTQIAPN+ *
            </span>
          </div>
          <div className="botao">
            <button>Proximo</button>
          </div>
        </form>
      </DivDadosProfissionais>
    </>
  );
}
