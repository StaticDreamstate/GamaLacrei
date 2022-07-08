import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginComponents from './components/Login';



export default function RouteComponent() {
    return (

            <BrowserRouter>
                <Routes>
                   <Route path='*' element={<LoginComponents/>}/>
                </Routes>
            </BrowserRouter>
       
    );
}

