import { HeaderStyled } from "../../../Global-Components/Header/header.style";
import { DivDados } from "./cadastro-dados-pessoais.style";
import avatar from "../../../assets/images/avatar.png";

export default function DadosPessoais() {
  return (
    <div>
      <DivDados>
        <div className="field">
          <h2>Dados Pessoais</h2>
        </div>

        <form action="#">
          <div className="imagem">
            <label htmlFor="imagem">Foto para perfil *</label>
            <div className="botao1">
              <img src={avatar} alt="user-avatar" id="imagem"></img>
              <button>Adicionar foto</button>
            </div>
          </div>

          <div className="field">
            <label htmlFor="descricao">
              Adicione uma descrição para sua foto
            </label>
            <textarea
              name="descricaofoto"
              id="descricaofoto"
              placeholder="Descreva sua foto para que seja acessível e inclusíva"
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="sobremim">Sobre Mim</label>
            <textarea
              name="sobremim"
              id="sobremim"
              placeholder="Fale sobre você"
            ></textarea>
          </div>
          <div className="botao2">
            <button type="submit">Continuar</button>
          </div>
        </form>
      </DivDados>
    </div>
  );
}
