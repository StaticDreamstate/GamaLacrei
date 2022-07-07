import styled from 'styled-components'


export const HeaderStyled = styled.header`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    margin-bottom: 30px;

    img{
        padding: 0 120px;

        @media(max-width: 900px) {
            &:nth-child(1){
                padding: 0 15px;
            }
        }
    }
`;