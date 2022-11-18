import {useContext} from 'react'
import { Container, Row } from 'react-bootstrap';
import ProjectInfo from "./ProjectInfo";
import { WorkWeekContext} from '../../context/WorkWeekContext'
import WeekSelect from "./WeekSelect";
import PagesInfo from './PagesInfo';
import './Home.css'

function Home() {
    const {workWeek} = useContext(WorkWeekContext)

    return(
        <div className='page-container' >
            <div className='white heading'>
                <h2>Home Week of {workWeek.end_date ? workWeek.end_date : ' - not yet selected -'}</h2>   
            </div> 
            <WeekSelect />
            <ProjectInfo />
            <PagesInfo />
        </div>
        
    )
}

export default Home;