import { Link } from "react-router-dom";
import './style.css'
function NewSala() {
    return(
        <div>
            <div className='status'>
                <Link to="/" className="link">Home</Link>
                <h2>
                     Status
                </h2>
            </div>
            <div className=''>
                <h2>
                     Sala criada com sucesso !!
                </h2>
            </div>
        </div>
    )
}
export default NewSala