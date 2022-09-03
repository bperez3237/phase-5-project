import Activity from "../components/Activity";
import { useEffect, useContext} from 'react'
import {ActivitiesContext} from '../context/ActivitiesContext'

function ActivityList() {
    const {activities, setActivities} = useContext(ActivitiesContext)

    useEffect(()=>{
        fetch('/activities')
        // fetch(`/work_weeks/${}/activities`)
            .then(r=>r.json())
            .then((data)=>setActivities(data))
    },[])

    console.log(activities)
    const activityElems = activities.map((activity)=>{
        if (activity.approved === false) {
            return <Activity key={activity.id} activity={activity} setActivities={setActivities}/>
        } else return null
    })


    return( 
        <>{activityElems}</>
    )
}

export default ActivityList;