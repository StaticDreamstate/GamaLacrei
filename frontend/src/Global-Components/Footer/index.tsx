
import { SectionStyled, DivStyled, DivImgStyled, LastSection } from "./styled"
import Logo from "../../assets/images/lacrei.png"
import Face from "../../assets/icons/Face.png"
import Email from "../../assets/icons/Email.png"
import Instagram from "../../assets/icons/Instagram.png"
import Linkedin from "../../assets/icons/Linkedin.png"


export default function Footer(){
    return(
        <div>
            <SectionStyled>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <DivStyled>
                    <h5 className="h5">Lacrei</h5>
                    <a>Início</a>
                    <a>Quem somos</a>
                    <a>Acessibilidade</a>
                </DivStyled>
                <DivStyled>
                    <h5 className="h5">Saúde</h5>
                    <a>Lacrei Pessoas Usuárias</a>
                    <a>Lacrei Profissional da Saúde</a>
                </DivStyled>
                <DivStyled>
                    <h5 className="h5">Segurança e privacidade</h5>
                    <a>Portal de segurança e privacidade</a>
                    <a>Política de privacidade</a>
                    <a>Termo de uso</a>
                    <a>Direitos de Titular</a>
                </DivStyled>
                <DivStyled>
                    <h5 className="h5">Redes sociais</h5>
                    <DivImgStyled>
                        <a href="https://www.facebook.com/lacrei.saude"><img src={Face} alt="" /></a>
                        <p>Facebook</p>
                    </DivImgStyled>
                    <DivImgStyled>
                        <a href="https://www.instagram.com/explore/tags/portallacrei/"><img src={Instagram} alt="" /></a>
                        <p>Instagram</p>
                    </DivImgStyled>
                    <DivImgStyled>
                        <a href="https://www.linkedin.com/company/lacrei/"><img src={Linkedin} alt="" /></a>
                        <p>Linkedin</p>
                    </DivImgStyled>
                    <DivImgStyled>
                        <a href="contato@portallacrei.com.br"><img src={Email} alt="" /></a>
                        <p>Email</p>
                    </DivImgStyled>
                    
                </DivStyled>
            </SectionStyled>
            <LastSection>
                <div>
                    <hr />
                </div>
                <div>
                    <p>A Lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.</p>
                    <p>Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o site www.cvv.org.br</p>
                    <p>Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 35.328.975/0001-28</p>
                </div>
            </LastSection>
        
        </div>
    )
}