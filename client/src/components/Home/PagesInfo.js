import {Container, Row, Col, Badge} from 'react-bootstrap'
import {useContext} from 'react'
import {WorkWeekContext} from '../../context/WorkWeekContext'

function PagesInfo() {
    const {workWeek} = useContext(WorkWeekContext)
    const activitiesExist = workWeek?.activities?.length > 0
    const unitsExist = workWeek?.units?.length > 0


    return (
        <Container className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <Row>
                <Col><p><span style={{fontWeight:'bold'}}>View Codes Page: </span>View and search data for all the data bases</p></Col>
            </Row>
            <Row>
                <Col><p><span style={{fontWeight:'bold'}}>Upload/Review Page: </span>Submit timesheets and review hours before submitting to the weekly report</p></Col>
            </Row>
            <Row>
                <Col><p><span style={{fontWeight:'bold'}}>Enter Quantities Page: </span>Enter Quantities Page: Enter units for each cost code in this report</p></Col>
            </Row>
            <Row>
                <Col><p><span style={{fontWeight:'bold'}}>Weekly Report Page: </span>A Summarized report of completed hours and units</p></Col>
            </Row>
        </Container>
    )
}

export default PagesInfo
