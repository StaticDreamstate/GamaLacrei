
import { HeaderStyled } from "../../../Global-Components/Header/header.style";
import { DivDados } from "./cadastro-dados-pessoais.style";


export default function DadosPessoais () {
    return(
<>
<DivDados>
<form action="#" >
                    <div className="field">
                        <label htmlFor="descricao">Adicione uma descrição para sua foto</label>
                        <input type="text" name="descricao" id="descricao" />
                    </div>
                    <div className="field">
                        <label htmlFor="sobremim">Sobre Mim</label>
                        <input type="text" name="sobremim" id="sobremim" />
                    </div>
                    
                    
                </form>
</DivDados>
</>


    )
}