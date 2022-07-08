import { DivStyledIsNot } from "./isNotSp.style";

export default function NaoSp() {
    return (
        <>
        
        <DivStyledIsNot>
            <p>
                Ainda não atuamos em seu Estado. 
                Preencha as informações abaixo para entrar na lista de espera e ser
                comunicada da implementação em seu Estado.
            </p>
            <form action="#" >
                <div className="field">
                    <label htmlFor="estado">Estado de atuação *</label>
                    <input type="search" name="estado" id="estado" value={'Minas Gerais'} disabled />
                </div>
                <div className="field">
                    <label htmlFor="email">E-mail *</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu melhor E-mail" required/>
                </div>
                <div className="field">
                    <label htmlFor="prefixo">Prefixo do Conselho Profissional *</label>
                    <select name="´prefixo" id="prefixo" required>
                        <option value="valor1">Prefixo</option>
                    </select>
                </div>
            </form>
        </DivStyledIsNot>
        </>
    );
}