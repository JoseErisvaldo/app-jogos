import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Home from './pages/Home'
import Agendar from './pages/Agendar'


function RoutesApp () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/Agendar' element={ <Agendar/> }></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp
