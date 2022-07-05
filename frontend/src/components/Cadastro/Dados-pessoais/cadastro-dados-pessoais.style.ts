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

  .field input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 8px;
  }
`;
