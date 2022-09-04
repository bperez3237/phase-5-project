import Activity from "../components/Activity";
import { useEffect, useState,  useContext} from 'react'
import {Container} from 'react-bootstrap'

function ActivityList({workWeekId}) {
    const [activities, setActivities] = useState([])

    useEffect(()=>{
        fetch(`/work_weeks/${workWeekId}/activities`).then((r)=>{
            if (r.ok) {
                r.json().then((data)=>setActivities(data))
            } else {
                r.json().then((err)=>console.log('error',err))
            }
        })
    },[workWeekId])

    const activityElems = activities.map((activity)=>{
        if (activity.approved === false) {
            return <Activity key={activity.id} activity={activity}/>
        } else return null
    })


    return( 
        <Container>{activityElems}</Container>
    )
}

export default ActivityList;