import {useContext} from 'react'
import ProjectInfo from "./ProjectInfo";
import { WorkWeekContext} from '../../context/WorkWeekContext'
import WeekSelect from "./WeekSelect";
import PagesInfo from './PagesInfo';
import WeekStatus from './WeekStatus';
import './Home.css'

function Home() {
    const {workWeek} = useContext(WorkWeekContext)

    return(
        <div className='page-container homepage' >
            {/* <div className='element heading'>
                <h2>Home Week of {workWeek!==[] ? workWeek.end_date : ' - not yet selected -'}</h2>   
            </div> 
            <WeekSelect />
            <ProjectInfo />
            <PagesInfo /> */}
            <div className='home-header'>
                <WeekSelect />
                <WeekStatus />
            </div>
            <ProjectInfo />
            <PagesInfo />
        </div>
        
    )
}

export default Home;