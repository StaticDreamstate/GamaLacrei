import styled from "styled-components"



export  const DataStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 140vh;
    padding: 0 2rem;
    
    
    
    form{
        width: 100%;
        max-width: 480px;
        padding: 0.5rem;
    }

    .field{
        padding-bottom: 0.7rem;
      
    }

    .field label{
        display: block;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #000000;
    }

    .field input{
        width: 100%;
        padding: 0.5rem;
    }

    .field select{
        width: 100%;
        max-width: 340px;
        padding: 0.5rem;
        margin-top: 0.2rem;
    }

    .termo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }

    .termo input[type=checkbox]{
        margin-right: 10px;
    }

    .termo #termoText{
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
    }
    .btnCentralizar{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .actions button{
        text-align: center;
        padding: 10px 32px;
        margin-top: 50px;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        color: #515151;
        border: none;
        background: #CFCFCF;
        cursor: pointer;
    }

`