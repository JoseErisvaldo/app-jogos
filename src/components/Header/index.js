import './style.css'
import { Link } from 'react-router-dom'

function Header () {
    return(
        <div id='nav-bar-top-user'>
            <div className='photo'> <img src="" alt='User'></img></div>
            <div className='user-dados' >
                Olá, José 
                <br></br> 
                <span>
                    Hoje é dia de vitoria
                </span>
            </div>
            <div id='new'> <Link to="/Agendar" className='link' >+</Link> </div>
        </div>

    )
}

export default Header