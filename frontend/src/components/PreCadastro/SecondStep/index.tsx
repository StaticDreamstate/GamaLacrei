import { useState } from "react";
import { DataStyled } from "./dadosP.style";

export default function SegundoPasso() {

    return (
        <>
            <DataStyled>
                <form action="#" >
                    <div className="field">
                        <label htmlFor="name">Estado de atuação *</label>
                        <input type="search" name="estado" id="estado" value={'São Paulo'} disabled />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Nome completo *</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" required />
                    </div>
                    <div className="field">
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu melhor E-mail" required />
                    </div>
                    <div className="field">
                        <label htmlFor="prefixo">Prefixo do Conselho Profissional *</label>
                        <select name="´prefixo" id="prefixo" required>
                            <option value="valor1">Prefixo</option>
                            <option value="valor2">COREN - Enfermagem</option>
                            <option value="valor3">CREFITO - Fisioterapia</option>
                            <option value="valor3">CRFa - Fonoaudiologia</option>
                            <option value="valor3">CRM - medicina</option>

                            
                            
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="numeroRegistro">Número do Registro Profissional *</label>
                        <input type="text" name="numeroRegistro" id="numeroRegistro" placeholder="Digite seu número de Registro Profissional" required />
                    </div>
                    <div className="field">
                        <label htmlFor="senha">Senha*</label>
                        <input type="password" name="senha" id="senha" placeholder="****************" required />
                    </div>
                    <div className="field">
                        <label htmlFor="confereSenha">Repita a mesma senha*</label>
                        <input type="password" name="confereSenha" id="confereSenha" placeholder="****************" required />
                    </div>
                    <div className="termo">
                        <input type="checkbox" name="termo" id="termo" />
                        <label htmlFor="termo" id="termoText">Li e Concordo com os Termos de Uso e Política de Privacidade*</label>
                    </div>
                    <div className="btnCentralizar">
                        <div className="actions">
                            <button type="submit">Continuar</button>
                        </div>
                    </div>
                </form>
            </DataStyled>
        </>
    );

}