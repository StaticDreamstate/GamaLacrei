import Img from '../../assets/images/elipse.png'
import {HeaderStyled} from './header.style'
export default function Header() {
    return(
        <>
            <HeaderStyled>
                <img src={Img} alt="Ellipse" />
                <h2>Lorem</h2>
            </HeaderStyled>
        
        </>
    );
}