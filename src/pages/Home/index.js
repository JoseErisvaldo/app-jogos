import './style.css'
import CategoryCards from '../../components/CategoryCards'
import ScheduledMatches from '../../components/ScheduledMatches'

import Header from '../../components/Header'

function Home () {
    return(
        <div>
            <Header/>
            <CategoryCards/>
            <ScheduledMatches/>
        </div>
    )
}

export default Home