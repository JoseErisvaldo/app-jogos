import './style.css'

import CategoryCards from '../../components/CategoryCards'
import ScheduledMatches from '../../components/ScheduledMatches'

function Home () {
    return(
        <div>
            <CategoryCards/>
            <ScheduledMatches/>
        </div>
    )
}

export default Home