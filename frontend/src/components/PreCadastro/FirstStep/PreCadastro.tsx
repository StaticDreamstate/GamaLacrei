import {  DivStyled } from "./FirstStyle"

export default function PreCadastro() {
    return (

        <DivStyled>
            <form>
                <div className="field">
                    <label htmlFor="estado">Estado</label>
                    <input type="search" name="estado" id="estado" />
                </div>
            </form>
        </DivStyled>
    )
}