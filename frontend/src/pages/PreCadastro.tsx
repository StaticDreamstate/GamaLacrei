import PreCadastro from "../components/Cadastro/FirstStep/PreCadastro";
import IsNotSp from "../components/Cadastro/IsNotSp";
import DadosPessoais from "../components/Cadastro/SecondStep/DadosPessoais";
import Header from "../Global-Components/Header";

export default function Cadastro (){
    return(
        <>
            <Header />
            {/* <PreCadastro /> */}
            {/* <DadosPessoais/> */}
            <IsNotSp />
        </>
    )
}