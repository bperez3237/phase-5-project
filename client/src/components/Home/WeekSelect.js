import useFetch from "../../hooks/useFetch"
import {useState, useContext} from 'react'
import { WorkWeekContext } from "../../context/WorkWeekContext"
import {DropdownButton, Dropdown, Container, Row, Col, Badge} from 'react-bootstrap'

function WeekSelect() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)
    const [value, setValue] = useState(workWeek.id)
    const activitiesExist = workWeek?.activities?.length > 0
    const unitsExist = workWeek?.units?.length > 0  
    const {data} = useFetch('/work_weeks')

    function handleWeekChange(e) {
        setValue(e)
        fetch(`/select_week`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({work_week_id: e})
        }).then(r=>{
            if (r.ok) {
                r.json().then((data)=>setWorkWeek(data))
            } else {
                r.json().then((error)=>console.log(error))
            }
        })
    }

    const optionsElements = data?.map((workWeek)=><Dropdown.Item key={workWeek.id} eventKey={workWeek.id}>{workWeek.end_date}</Dropdown.Item>)

    return(
        <Container className="d-flex">
            <Row>
                <Col>
                    <DropdownButton onSelect={handleWeekChange} value={value} title="Select Work Week:">
                        {optionsElements}
                    </DropdownButton>
                </Col>
                <Col>
                    <Badge bg={activitiesExist ? 'success' : 'danger'}>Units {(unitsExist ? "" : "not ")+"submitted"}</Badge>
                </Col>
                <Col>
                    <Badge bg={activitiesExist ? 'success' : 'danger'}>Activities {(activitiesExist ? "" : "not ")+"submitted"}</Badge>
                </Col>
            </Row>
        </Container>
    )
}

export default WeekSelect;