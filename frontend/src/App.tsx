import React from "react";
import { CadastroConsultorio } from "./components/Cadastro/Cadastro-consultorio/cadastro-consultorio";
import DadosPessoais from "./components/Cadastro/Dados-pessoais/cadastro-dados-pessoais";
import { DadosProfissionais } from "./components/Cadastro/Dados-profissionais/dados-profissionais";
import Header from "./Global-Components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <CadastroConsultorio />
    </>
  );
}

export default App;
