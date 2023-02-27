import React from 'react'
import { useContext } from 'react'
import { WorkWeekContext } from "../../context/WorkWeekContext"
import { Badge} from 'react-bootstrap'

function WeekStatus() {
    const {workWeek} = useContext(WorkWeekContext)


    const activitiesExist = workWeek?.activities?.length > 0
    const unitsExist = workWeek?.units?.length > 0  
    return (
        <div className='element week-status'>
            <Badge bg={unitsExist ? 'success' : 'danger'}>Units {(unitsExist ? "" : "not ")+"submitted"}</Badge>
            <Badge bg={activitiesExist ? 'success' : 'danger'}>Activities {(activitiesExist ? "" : "not ")+"submitted"}</Badge> 
        </div>
  )
}

export default WeekStatus