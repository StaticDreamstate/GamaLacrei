import styled from "styled-components"





export  const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    padding: 0 2rem;
    
    
    
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
    

`