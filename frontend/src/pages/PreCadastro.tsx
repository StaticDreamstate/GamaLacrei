import PreCadastro from "../components/PreCadastro/FirstStep/PreCadastro";
import IsNotSp from "../components/PreCadastro/IsNotSp";
import DadosPessoais from "../components/PreCadastro/SecondStep/DadosPessoais";
import Header from "../Global-Components/Header";



export default function Cadastro (){
    return(
        <>
          
            <Header />
            <DadosPessoais/>
            {/* <PreCadastro/> */}
        </>
    )
}