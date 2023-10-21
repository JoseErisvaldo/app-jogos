import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Home from './pages/Home'
import Agendar from './pages/Agendar'
import ViewSala from './pages/ViewSala'
import NewSala from './pages/NewSala'

function RoutesApp () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/Agendar' element={ <Agendar/> }></Route>
                <Route path='/viewsala' element={ <ViewSala/>}/>
                <Route path='/newsala' element={ <NewSala/>}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp
