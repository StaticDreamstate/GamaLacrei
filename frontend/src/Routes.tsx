import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginComponents from './components/Login';
import PrimeiroPasso from './components/PreCadastro/FirstStep/';
import NaoSp from './components/PreCadastro/IsNotSp';
import SegundoPasso from './components/PreCadastro/SecondStep';



export default function RouteComponent() {
    return (

            <BrowserRouter>
                <Routes>
                   <Route path='*' element={<LoginComponents/>}/>
                   <Route path='/primeiropasso' element={<PrimeiroPasso/>}/>
                   <Route path='/segundopasso' element={<SegundoPasso/>} />
                   <Route path='/notsp' element={<NaoSp/>} />

                </Routes>
            </BrowserRouter>
       
    );
}

