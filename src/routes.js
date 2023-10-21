import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Agendar from './pages/Agendar'


function RoutesApp () {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/Agendar' element={ <Agendar/> }></Route>

            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp
