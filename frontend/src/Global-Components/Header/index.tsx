import Img from '../../assets/images/lacrei.png'
import Nav from './Nav/index';
import {HeaderStyled} from './header.style'
export default function Header() {
    return(
        <>
            <HeaderStyled>
                <img src={Img} alt="Ellipse" />
                <Nav/>
            </HeaderStyled>
        
        </>
    );
}