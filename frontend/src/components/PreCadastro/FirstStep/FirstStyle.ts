import styled from "styled-components"

export const DropStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    box-sizing: border-box;
  
    form{
        width: 100%;
        max-width: 480px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: #2D2D2D;
    }

    .btnCentralizar{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .actions button{
        text-align: center;
        padding: 10px 32px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: #515151;
        border: none;
        background: #CFCFCF;
        cursor: pointer;
    }

    @media(max-width: 360px) {
        margin: 10px;
    }
    
    
`;