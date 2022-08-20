import Activity from "../components/Activity";
import {useState, useEffect, useContext} from 'react'
import { ActivityContext } from "../context/ActivitiesContext";

function ActivityList() {
    const {activities, setActivities} = useContext(ActivityContext)

    useEffect(()=>{
        fetch('/activities')
            .then(r=>r.json())
            .then((data)=>setActivities(data))
    },[])

    const activityElems = activities.map((activity)=>{
        if (activity.approved == false) {
            return <Activity key={activity.id} activity={activity} setActivities={setActivities}/>
        } else {
            return <h4 key={activity.id}>approved</h4>
        }
    })


    return( 
        <>{activityElems}</>
        
    )
}

export default ActivityList;