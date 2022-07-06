import { HeaderStyled } from "../../../Global-Components/Header/header.style";
import { DivDados } from "./cadastro-dados-pessoais.style";

export default function DadosPessoais() {
  return (
    <>
      <DivDados>
        <form action="#">
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
        </form>
      </DivDados>
    </>
  );
}
