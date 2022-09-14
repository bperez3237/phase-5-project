import {Container, Button} from 'react-bootstrap'
import { ActivitiesContext } from './context/ActivitiesContext'
import {WorkWeekContext} from '../../context/WorkWeekContext'
import {useContext} from 'react'

function DeleteTimesheet() {
    const {workWeek} = useContext(WorkWeekContext)
    const {setActivities} = useContext(ActivitiesContext)

    // console.log(workWeek)
    function handleDelete() {
        fetch(`/work_weeks/${workWeek.id}/activities`, {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {setActivities([])}
        })
    }

    return(
        <Container style={{border:'1px', borderStyle:'solid'}}>
            <h1>Delete Timesheet</h1>
            <Button onClick={handleDelete}> Delete Activities</Button>
        </Container>
    )
}

export default DeleteTimesheet