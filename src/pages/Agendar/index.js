import './style.css'
import { Link } from "react-router-dom"

import CategoryCards from '../../components/CategoryCards'

function Agendar () {
    return(
        <div>
            <div className='nav-agendar'>
                <Link to="/" className="link"><i class='bx bx-left-arrow-alt'></i></Link>
                <h2>
                    Agendar partida
                </h2>
            </div>
            <CategoryCards/>
            <div className='forms-scheduled'>
                <select>
                    <option value="" >Selecione um servidor</option>
                    <option value="Lendários" >Lendários</option>
                    <option value="Rumo ao topo" >Rumo ao topo</option>
                    <option value="Bora queimar tudo" >Bora queimar tudo</option>
                </select>
                <div className='date-scheduled'>
                    <div className='date' >
                        Data
                        <input type='date'/>
                    </div>
                    <div className='hora' >
                        Hora
                        <input type='time'/>
                    </div>
                    <div className='descricao' >
                        Descrição
                        <input className='input-descricao' type='text'/>
                    </div>
                    <div className='scheduled-btn'>
                        <button>  <i class='bx bx-right-arrow-alt' ></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agendar