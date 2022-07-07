import styled from "styled-components";

export const DivDados = styled.div`
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
  }

  .field textarea {
    width: 100%;
    resize: none;
    height: 200px;
    border: 1px solid #515151;
    border-radius: 8px;
  }
  .field textarea::placeholder {
    padding: 5px;
  }
  button {
    font-weight: 700;
    font-size: 18px;
    font-family: "Nunito";
    background: #cfcfcf;
    border-radius: 8px;
    padding: 10px 32px;
  }

  .botao1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .botao1 img {
    width: 145px;
    height: 145px;
    margin: 2px;
  }
  .botao1 button {
    margin: 10px 0px;
    background: #ffffff;
    border: 2px solid #018762;
    border-radius: 8px;
    color: #018762;
  }

  .botao2 {
    text-align: center;
  }

  .text {
    text-align: end;
  }

  .imagem label {
    /* padding-top: 100px; */
    display: block;
  }
  .foto {
    background: #ffffff;
    border: 2px solid #018762;
    border-radius: 8px;
    color: #018762;
  }
  h2 {
    padding-top: 128px;
  }

  p {
    color: #1f1f1f;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }
`;
