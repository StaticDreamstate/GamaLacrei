import { FormStyled, H2Styled, PStyled, InputStyled, FormmStyled, DivStyled, DivStyledd, DivStyleddd , HrStyled } from "./LoginStyled"
import Linha from "../../assets/images/line.png"
import { useAuth } from "../../context/AuthProvider/useAuth";
import React, { useState, createContext } from 'react';
import { Link } from "react-router-dom";



export default function LoginComponents(){


    return(
        
        <DivStyled>
            <FormStyled>
                <div>
                <H2Styled>Entrar na Conta</H2Styled>

                <PStyled >Email</PStyled>
                <InputStyled type={"email"} placeholder={"Seu email"}/>
                
                <PStyled >Senha</PStyled>
                <InputStyled type={"password"} placeholder={"Sua senha"}/>
                </div>
                <FormmStyled>
                    <DivStyleddd>
                        <button><span>entrar</span></button>
                    </DivStyleddd>
                    <div>
                        <HrStyled color="#1E1E1E" />
                    </div>
                    <DivStyledd>
                        <h3>Quero ser ume profissional</h3>
                        <Link className="btnCadastrar" to="/primeiropasso" >Cadastrar</Link>
                    </DivStyledd>
                </FormmStyled>
            
            </FormStyled>

        </DivStyled>
    )
}


