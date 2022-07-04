import { useState } from "react";
import { DataStyled } from "./dadosP.style";

export default function DadosPessoais() {

    const [imagem, setImagem] = useState<{images: File[]}[]>([{ images: [] }]);


    
    return(
        <>
           <DataStyled>
            
                <form action="#" >
                    <div className="field">
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" name="nome" id="nome" />
                    </div>
                    <div className="field">
                        <label htmlFor="numeroConcelho">Número de Inscrição do Conselho de Classe *</label>
                        <input type="text" name="numeroConcelho" id="numeroConcelho" />
                    </div>
                    <div className="field">
                        <label htmlFor="especialidade">Especialidade Clínica *</label>
                        <input type="text" name="especialidade" id="especialidade" />
                    </div>
                    <div className="field">
                        <label htmlFor="imagem">Foto com seu rosto e a carteira profissional ao lado *</label>                  
                        <input type="file" name="imagemUsuario" id="imagem" onChange={
                        (e) => setImagem(e.target.files[0])} />

                    </div>
                    <div className="field">
                        <label htmlFor="CartaDeEntrada">Carta de entrada</label>
                        <textarea name="CartaDeEntrada" id="CartaDeEntrada"></textarea>
                    </div>
                    
                </form>
            
            </DataStyled>     
        </>
    );

}