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
            <div className="container-view-sala">
                <div className="view-sala-img"> <img src="" alt="Foto"></img></div>
                <div className="view-sala-status">
                    <h2>
                        Jogadores
                    </h2>
                    <h3>Total 3</h3>
                </div>
            </div>
            <div className="view-sala-jogadores">
                <div className="view-sala-jogadores-jogador"><img src="" alt="Jogador"></img></div>
                <div className="view-sala-status-jogadores">
                    <h3>José Erisvaldo</h3>
                    <h5 className="disponivel"><i class='bx bxs-color' />Disponivel</h5>
                </div>
            </div>
            <div className="view-sala-jogadores">
                <div className="view-sala-jogadores-jogador"><img src="" alt="Jogador"></img></div>
                <div className="view-sala-status-jogadores">
                    <h3>Lucia Maria</h3>
                    <h5 className="ocupado"><i class='bx bxs-color'/>Ocupado</h5>
                </div>
            </div>
            <div className="view-sala-jogadores">
                <div className="view-sala-jogadores-jogador"><img src="" alt="Jogador"></img></div>
                <div className="view-sala-status-jogadores">
                    <h3>Thor</h3>
                    <h5 className="indisponivel"><i class='bx bxs-color' ></i>Indisponivel</h5>
                </div>
            </div>

        </div>
    )
}

export default ViewSala