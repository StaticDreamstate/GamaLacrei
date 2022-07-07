import styled from "styled-components"

export const SectionStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 80px;
    gap: 40px;
    div img{
        width: 48px;
        height: 48px;
        margin-top: 56px;
    }

`

export const DivStyled= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 30px;


    .h5{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 150%
        
    }
    p{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
    }
`
export const DivImgStyled = styled.div`
    
    display: flex;
    
    img{
        width: 12px;
        height: 20px;
    }

    p{
        display: flex;
        align-items: center;
        padding-left: 26px;
    }
`
export const LastSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    div hr{
        width: 1110px;
    }
    div p{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #515151;
    }
`