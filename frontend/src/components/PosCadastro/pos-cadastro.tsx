import { PCadastro } from "./pos-cadastro.style";

export function PosCadastro() {
  return (
    <>
      <PCadastro>
        <form>
          <div className="field">
            <label htmlFor="name">
              Registro de Qualificação de Especialista (RQE)
            </label>
            <input type="text" name="registroquali" id="registroquali" />
          </div>
          <div className="field">
            <label htmlFor="name">Tratamento de doenças</label>
            <input type="text" name="tratamento" id="tratamento" />
          </div>
          <div className="field">
            <label htmlFor="name">Especialidade</label>
            <input type="text" name="especialidade" id="especialidade" />
          </div>
          <div className="field">
            <label htmlFor="name">Formação acadêmica</label>
            <input type="text" name="formacao" id="formacao" />
          </div>
          <div className="field">
            <label htmlFor="name">Publica Perfil</label>
            <input type="text" name="perfil" id="perfil" />
          </div>
          <div className="field">
            <label htmlFor="name">Remover Perfil</label>
            <input type="text" name="removerperfil" id="removerperfil" />
          </div>
          <div className="field">
            <label htmlFor="name">Política de Uso e Privacidade</label>
            <input type="text" name="usoprovacidade" id="usoprovacidade" />
          </div>
        </form>
      </PCadastro>
    </>
  );
}
