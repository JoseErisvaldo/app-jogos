import './style.css'
function ScheduledMatches () {
    return(
        <div id="container-scheduled">
            <div className='dados-title' >
                <h3 className="title-scheduled">Partidas Agendadas</h3>
                <div className="total-scheduled">Total: 4</div>
            </div>
            <div id='cards-scheduled'>
                <img src='' alt='Foto Lendários' ></img> 
                <div className='dados-cards'>
                    <h4>Lendários</h4>
                    <h5>League of Legends</h5>
                    <div>
                        <i class='bx bxs-calendar' ></i>
                        Sex 18/06 às 21:00h
                    </div>
                </div>
                <div className='dados-status'>
                    <h5> 
                        Ranqueada
                    </h5>
                    <div className='status-total'>
                        <div><i class='bx bxs-user' ></i></div>
                        <div>3</div>
                    </div>
                </div>
            </div>
            <div id='cards-scheduled'>
                <img src='' alt='Foto Yeah' ></img> 
                <div className='dados-cards'>
                    <h4>Yeah, boy</h4>
                    <h5>Red Dead Redemption 2</h5>
                    <div>
                        <i class='bx bxs-calendar' ></i>
                        Qua 23/06 às 19:00h
                    </div>
                </div>
                <div className='dados-status'>
                    <h5> 
                        Diversão
                    </h5>
                    <div className='status-total'>
                        <div><i class='bx bxs-user' ></i></div>
                        <div>3</div>
                    </div>
                </div>
            </div>
            <div id='cards-scheduled'>
                <img src='' alt='Foto Rumo' ></img> 
                <div className='dados-cards'>
                    <h4>Rumo ao topo</h4>
                    <h5>Counter Strike: GO</h5>
                    <div>
                        <i class='bx bxs-calendar' ></i>
                        Dom 20/06 às 09:00h
                    </div>
                </div>
                <div className='dados-status'>
                    <h5> 
                        1x1
                    </h5>
                    <div className='status-total'>
                        <div><i class='bx bxs-user' ></i></div>
                        <div>2</div>
                    </div>
                </div>
            </div>
            <div id='cards-scheduled'>
                <img src='' alt='Foto Bora' ></img> 
                <div className='dados-cards'>
                    <h4>Bora queimar tudo</h4>
                    <h5>Apex Legends</h5>
                    <div>
                        <i class='bx bxs-calendar' ></i>
                        Dom 20/06 às 14:20h
                    </div>
                </div>
                <div className='dados-status'>
                    <h5> 
                        Ranqueada
                    </h5>
                    <div className='status-total'>
                        <div><i class='bx bxs-user' ></i></div>
                        <div>4</div>
                    </div>
                </div>
            </div>
            
             
        </div>
    )
}

export default ScheduledMatches