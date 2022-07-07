import { recursosArray } from "../../assets/icons"

export default function Footer(){
    return(
        <section>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h5>Lacrei</h5>
                <a>Início</a>
                <a>Quem somos</a>
                <a>Acessibilidade</a>
            </div>
            <div>
                <h5>Saúde</h5>
                <a>Lacrei Pessoas Usuárias</a>
                <a>Lacrei Profissional da Saúde</a>
            </div>
            <div>
                <h5>Segurança e privacidade</h5>
                <a>Portal de segurança e privacidade</a>
                <a>Política de privacidade</a>
                <a>Termo de uso</a>
                <a>Direitos de Titular</a>
            </div>
            <div>
                <h5>Redes sociais</h5>
                {recursosArray.map((element,index)=>(
                <div key={element.text+index}>
                    <img src={element.img} alt={element.text} />
                    <p>{element.text}</p>
                </div>
                ))}
            </div>
        </section>
    )
}