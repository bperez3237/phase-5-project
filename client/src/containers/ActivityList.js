import Activity from "../components/Activity";
import {useState, useEffect} from 'react'

function ActivityList() {
    const [activities, setActivities] = useState([])

    useEffect(()=>{
        fetch('/activities')
            .then(r=>r.json())
            .then((data)=>setActivities(data))
    },[activities])

    const activityElems = activities.map((activity)=>{
        if (activity.approved == false) {
            return <Activity key={activity.id} activity={activity} />
        } else {
            return <></>
        }
    })


    return( 
        <>{activityElems}</>
        
    )
}

export default ActivityList;