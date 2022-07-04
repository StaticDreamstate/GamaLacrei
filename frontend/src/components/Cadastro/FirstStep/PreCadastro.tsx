import {FormStyled ,DivStyled } from "./FirstStyle"

export default function PreCadastro (){
    return(
        <FormStyled>
            <DivStyled>
                <h3>Estado</h3>
                <input type="text" autoComplete="on" />
            </DivStyled>
        </FormStyled>
    )
}