import { FormStyled, H2Styled, PStyled, InputStyled, FormmStyled } from "./LoginStyled"
import Linha from "../../assets/images/line.png"

export default function LoginComponents(){
    return(
        
            <FormStyled>
                <H2Styled>Entrar na Conta</H2Styled>
                <PStyled>Email</PStyled>
                
                <InputStyled type={"email"}/>
                <PStyled>Senha</PStyled>
                
                <InputStyled type={"password"}/>
                <FormmStyled>
                    <div>
                        <button>entrar</button>
                    </div>
                    <div>
                        <img src={Linha} />
                    </div>
                    <div>
                        <button>Cadastrar</button>
                    </div>
                </FormmStyled>
            </FormStyled>
        
    )
}