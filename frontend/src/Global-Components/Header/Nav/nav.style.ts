import styled from "styled-components";

export const NavStyled = styled.nav`

   
    top: 0;
    width: 100%;
    height: 63px;
    margin: 0;
    padding: 0;
   
    .list {
        list-style-type: none;
        display: flex;
        justify-content: end;
        align-items: center;
        position: relative;
    }
    .items {
        margin-right: 90px;
        font-family: 'Nunito' sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        color: #1F1F1F;
        cursor: pointer;

       
       
        &:hover{
            padding-bottom: 3px ;
            color: #018762;
            border-bottom: 3px solid #018762;
            transition: 0.2s all ease-in-out;
        }
    }

    .btn {
        display: none;
        position: absolute;
        right: 10px;
        top: 7px;
        background-color: #fff;
        
    }


    @media screen and (max-width: 900px){
        
        .list {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #fff;


        }
        .items:nth-child(1){
            margin-top: 50px;
        }

        .items {
            width: 100%;
            text-align: center;
            padding: 20px 0;
        }

        .btn {
            display: block;
            width: 70px;
            height: 43px;
            border: none;
            z-index: 1;
           
            &:hover{
            background: #018762;

        }
        }

    }

`;