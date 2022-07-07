import styled from "styled-components"

export  const DivStyledIsNot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    padding: 0 2rem;
    
    p{
        width: 100%;
        max-width: 460px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #1F1F1F;
    }
    
    form{
        width: 100%;
        max-width: 480px;
        padding: 0.5rem;
    }

    .field{
        padding-bottom: 0.5rem;
    }

    .field label{
        display: block;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        color: #585858;
        padding-bottom: 0.2rem;
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
    

`