import { FormStyled, H2Styled, PStyled, InputStyled, FormmStyled, DivStyled, DivStyledd, DivStyleddd } from "./LoginStyled"
import Linha from "../../assets/images/line.png"

export default function LoginComponents(){
    return(
        <DivStyled>
            <FormStyled>
                <H2Styled>Entrar na Conta</H2Styled>
                <PStyled>Email</PStyled>
                
                <InputStyled type={"email"} placeholder={"Seu email"}/>
                <PStyled>Senha</PStyled>
                
                <InputStyled type={"password"} placeholder={"Sua senha"}/>
                <FormmStyled>
                    <DivStyleddd>
                        <button><span>entrar</span></button>
                    </DivStyleddd>
                    <div>
                        <img src={Linha} />
                    </div>
                    <DivStyledd>
                        <button><span>Cadastrar</span></button>
                    </DivStyledd>
                </FormmStyled>
            </FormStyled>
        </DivStyled>
    )
}