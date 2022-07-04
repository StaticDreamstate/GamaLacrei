import styled from "styled-components";

export const NavStyled = styled.nav`

    ul{
        width: 100%;
        list-style: none;
        display: flex;
        box-sizing: border-box;
        

        
        li{
           padding: 10px 50px;
           font-family: 'Nunito', sans-serif;
           font-style: normal;
           font-weight: 700;
           font-size: 16px;
           line-height: 150%;
           color: #FFFFFF;
           cursor: pointer;

           &:hover{
                color: #DF1098 ;
           }
        }
    }


`