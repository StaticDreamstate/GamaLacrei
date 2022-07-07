import styled from "styled-components";

export const DivDadosProfissionais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 125vh;
  padding: 0 2rem;

  form {
    width: 100%;
    max-width: 480px;
    padding: 0.5rem;
  }

  h2 {
    display: block;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #000000;
    padding-bottom: 232px;
    padding-right: 30px;
  }

  span {
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 400;
    color: #515151;
    width: 572px;
  }

  .field {
    padding-bottom: 0.7rem;
  }
  .field label {
    display: block;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #000000;
    padding-bottom: 8px;
  }
  .field input {
    width: 100%;
    padding: 12px 12px 12px 16px;
    border-radius: 8px;
    border: 1px solid #515151;
  }

  button {
    font-weight: 700;
    font-size: 18px;
    font-family: "Nunito";
    background: #eeeeee;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 32px;
  }

  .botao {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  textarea {
    width: 100%;
    padding: 4rem;
    resize: none;
    box-sizing: border-box;
    border: 1px solid #515151;
    border-radius: 8px;
  }
`;
