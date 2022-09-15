import {useContext} from 'react'
import { Container, Row } from 'react-bootstrap';
import ProjectInfo from "./ProjectInfo";
import { WorkWeekContext} from '../../context/WorkWeekContext'
import WeekSelect from "./WeekSelect";
import PagesInfo from './PagesInfo';

function Home() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)

    return(
        <Container>
            <Row>   
                <h1>Home Week of {workWeek.end_date}</h1>         
                <WeekSelect workWeek={workWeek} setWorkWeek={setWorkWeek} />
                <ProjectInfo />
            </Row>
            <PagesInfo />
        </Container>
        
    )
}

export default Home;