import {useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProjectInfo from "../components/ProjectInfo";
import { WorkWeekContext} from '../context/WorkWeekContext'
import WeekSelect from "../components/WeekSelect";

function Home() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)
    const activitiesExist = workWeek?.activities?.length > 0
    const unitsExist = workWeek?.units?.length > 0

    return(
        <Container>
            <Row>   
                <h1>Home Week of {workWeek.end_date}</h1>         
                <WeekSelect workWeek={workWeek} setWorkWeek={setWorkWeek} />
                <ProjectInfo />
            </Row>
            <Row>
                <Col><p>View Page: view and search data for all the data bases</p></Col>
            </Row>
            <Row>
                <Col><p>Upload/Review Page: Submit timesheets and review hours before submitting to the weekly report</p></Col>
                <Col><p style={{color: activitiesExist ? 'green' : 'red'}} >Activities {(activitiesExist ? "" : "not ")+"submitted"}</p></Col>
            </Row>
            <Row>
                <Col><p>Enter Quantities Page: Enter units for each cost code in this report</p></Col>
                <Col><p style={{color: unitsExist ? 'green' : 'red'}}>Units {(unitsExist ? "" : "not ")+"submitted"}</p></Col>
            </Row>
            <Row>
                <Col><p>Weekly Report Page: A Summarized report of completed hours and units</p></Col>
            </Row>
        </Container>
        
    )
}

export default Home;