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
        <div className='element delete-container'>
            {error && <DismissableError error={error}  setError={setError}/>}
            <h4>Delete Timesheet</h4>
            <button id='button' className='m-3' onClick={handleDelete}> Delete Activities</button>
        </div>
    )
}

export default DeleteTimesheet