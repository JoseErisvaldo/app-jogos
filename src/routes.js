import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'


function RoutesApp () {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/sobre' element={ <About/> }></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp
