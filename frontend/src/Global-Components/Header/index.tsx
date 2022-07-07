import Img from '../../assets/images/lacrei.png'
// import Nav from './Nav/index';
import {HeaderStyled}  from './header.style';
import NavBar from './Nav';




export default function Header() {
    return(
        <>
            
            <HeaderStyled>
                <img src={Img} alt="Ellipse" />
                <NavBar/>
            </HeaderStyled>
            
        
        </>
    );
}