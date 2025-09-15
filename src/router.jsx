import Inicio from './pages/Inicio.jsx'
import Multiplicar from './pages/Multiplicar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'


export default function Navegacao(){
   return( 
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />}/>
      <Route path='/multiplicar' element={<Multiplicar />} /> 
    </Routes>
    </BrowserRouter>
   )
}