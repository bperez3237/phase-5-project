import {Container, Button} from 'react-bootstrap'
import { ActivitiesContext } from './context/ActivitiesContext'
import {WorkWeekContext} from '../../context/WorkWeekContext'
import {useContext, useState} from 'react'
import DismissableError from '../Error/DismissableError'

function DeleteTimesheet() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)
    const {setActivities} = useContext(ActivitiesContext)
    const [error,setError] = useState('')

    function handleDelete() {
        fetch(`/work_weeks/${workWeek.id}/activities`, {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setActivities([])
                setWorkWeek({...workWeek,activities: []})
            } else {
                r.json().then((error)=> setError(error))
            }
        })
    }

    return(
        <Container className='p-3 m-3' style={{border:'1px', borderStyle:'solid', width:'500px'}}>
            {error && <DismissableError error={error}  setError={setError}/>}
            <h1>Delete Timesheet</h1>
            <Button onClick={handleDelete}> Delete Activities</Button>
        </Container>
    )
}

export default DeleteTimesheet