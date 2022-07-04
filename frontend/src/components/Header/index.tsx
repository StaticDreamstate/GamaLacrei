import Img from '../../assets/images/elipse.png'
import Nav from '../Nav';
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