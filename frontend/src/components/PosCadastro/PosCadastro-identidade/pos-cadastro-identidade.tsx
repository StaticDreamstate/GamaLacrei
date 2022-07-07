import { PosCadastroIdentidade } from "./pos-cadastro-identidade.style";

export function PosCadastroIdent() {
  return (
    <>
      <PosCadastroIdentidade>
        <form>
          <div className="field">
            <label htmlFor="convenio">Pronome</label>
            <select name="select">
              <option value="" disabled selected>
                Escolha o seu pronome
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="convenio">Etnia</label>
            <select name="select">
              <option value="" disabled selected>
                Escolha o sua Etnia
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="convenio">Identidade de Gênero</label>
            <select name="select">
              <option value="" disabled selected>
                Escolha a sua Identidade de Gênero
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="convenio">Sexualidade</label>
            <select name="select">
              <option value="" disabled selected>
                Escolha a sua Sexualidade
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="convenio">Pessoa com deficiência (PCD)</label>
            <select name="select">
              <option value="" disabled selected>
                Possui algum tipo de deficiência? Selecione.
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="convenio">Público alvo</label>
            <select name="select">
              <option value="" disabled selected>
                Escolha o seu público alvo
              </option>
              <option value="valor2"></option>
              <option value="valor3"></option>
            </select>
          </div>
        </form>
      </PosCadastroIdentidade>
    </>
  );
}
