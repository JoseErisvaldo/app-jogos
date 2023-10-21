import { Link } from "react-router-dom"
import "./style.css"
function ViewSala () {
    return(
        <div>
            <div className='nav-partida'>
                <Link to="/" className="link"><i class='bx bx-left-arrow-alt'></i></Link>
                <h2>
                     Partida
                </h2>
            </div>



        </div>
    )
}

export default ViewSala