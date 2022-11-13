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
        <div className='home-container' >
            <h1>Home Week of {workWeek.end_date ? workWeek.end_date : ' - not yet selected -'}</h1>         
            <WeekSelect />
            <ProjectInfo />
            <PagesInfo />
        </div>
        
    )
}

export default Home;