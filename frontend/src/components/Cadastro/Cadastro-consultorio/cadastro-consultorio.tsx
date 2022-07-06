import { CadConsultorio } from "./cadastro-consultorio.style";

export function CadastroConsultorio() {
  return (
    <>
      <CadConsultorio>
        <form>
          <div className="field">
            <label htmlFor="name">Endereço do Consultório *</label>
            <input
              type="text"
              name="enderecoconsultorio"
              id="enderecoconsultorio"
            />
          </div>
          <div className="field">
            <label htmlFor="contatoconsultorio">
              Telefone de contato do consultório*
            </label>
            <input
              type="text"
              name="contatoconsultorio"
              id="contatoconsultorio"
            />
          </div>
          <div className="field">
            <label htmlFor="especialidade">Acessibilidade da Clínica *</label>
            <select name="select">
              <option value="" disabled selected>
                Selecione as normas da clinica
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
            <div className="normas">
              <p className="normas">
                Não sabe todas as normas?<a href="#">Clique aqui</a>{" "}
              </p>
            </div>
          </div>
          <div className="field">
            <label htmlFor="horarios">Horários e dias de funcionamento *</label>
            <input type="text" name="horarios" id="horarios" />
          </div>
          <div className="field">
            <label htmlFor="tipoconsulta">Tipo de consulta</label>
            <select name="select">
              <option value="" disabled selected>
                Escolha tipo de consulta
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="convenio">Convenio Aceitos *</label>
            <select name="select">
              <option value="" disabled selected>
                Escolha convenios
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
        </form>
      </CadConsultorio>
    </>
  );
}
