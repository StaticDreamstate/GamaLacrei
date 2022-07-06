import { CadastroServico } from "./cadastro-servico.style";

export function CadServico() {
  return (
    <>
      <CadastroServico>
        <form>
          <div className="field">
            <label htmlFor="name">Nome do Serviço *</label>
            <input
              type="text"
              name="nomeservico"
              id="nomeservico"
              placeholder="Digite o nome do serviço"
            />
          </div>
          <div className="field">
            <label htmlFor="contatoconsultorio">Duração em minutos*</label>
            <input type="text" name="duracao" id="duracao" />
          </div>
          <div className="field">
            <label htmlFor="especialidade">Valor da consulta *</label>
            <input type="text" name="valor" id="valor" />
          </div>
          <div className="field">
            <label htmlFor="horarios">Horários e dias de funcionamento *</label>
            <input type="text" name="horarios" id="horarios" />
          </div>
          <div className="field">
            <label htmlFor="tipoconsulta">Modalidade</label>
            <select name="select">
              <option value="" disabled selected>
                {" "}
                Escolha tipo de modalidade
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
              <option value="valor4"></option>
            </select>
          </div>
        </form>
      </CadastroServico>
    </>
  );
}
